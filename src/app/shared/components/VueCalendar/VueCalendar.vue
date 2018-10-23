<template>
  <div :class="$style.calendar">
    <div :class="$style.header">
      <vue-headline level="4" @click="setSelecting('year')">{{ selectedYear }}</vue-headline>
      <vue-headline level="5" @click="setSelecting('date')">{{ $d(calculatedDate, 'calendarHeader') }}</vue-headline>
    </div>

    <div :class="$style.body" v-if="selecting === 'date'">
      <div :class="$style.date">
        <div :class="$style.arrow" @click="setByMonth(currentMonth - 1)"></div>
        <div :class="$style.currentDate">{{ $d(new Date(currentYear, currentMonth, 1), 'calendarNav') }}</div>
        <div :class="$style.arrow" @click="setByMonth(currentMonth + 1)"></div>
      </div>

      <table>
        <thead>
        <tr>
          <td v-for="weekday in weekdays" :class="$style.disabledDay"><span>{{ weekday }}</span></td>
        </tr>
        </thead>

        <tbody>
        <tr v-for="(days, index) in calendar" :key="index">
          <td
            :class="[day.currentDay ? $style.currentDay : '', day.disabled ? $style.disabledDay : '', day.selected ? $style.selectedDay : '']"
            v-for="day in days"
            tabindex="0"
            @keydown.enter.stop.prevent="setByDay(day)"
            @keydown.space.stop.prevent="setByDay(day)"
            @click="setByDay(day)">
            <span>{{ day.day }}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <div :class="$style.year" v-if="selecting === 'year'">
      <div
        :class="[year.selected ? $style.selected : '']"
        :id="`${year.year}-calendar-year`"
        :key="year.year"
        v-for="year in years"
        @click="setByYear(year.year)">
        {{ year.year }}
      </div>
    </div>

    <div :class="$style.footer">
      <vue-button @click.stop.prevent="onClose" primary ghost>Cancel</vue-button>
      <vue-button @click.stop.prevent="onChange" secondary>Ok</vue-button>
    </div>
  </div>
</template>

<script lang="ts">
  import chunk       from 'lodash/chunk';
  import VueButton   from '../VueButton/VueButton.vue';
  import VueHeadline from '../VueHeadline/VueHeadline.vue';

  interface IData {
    selecting: string;
    currentMonth: number;
    currentYear: number;
    selectedDayOfWeek: number;
    selectedDay: number;
    selectedMonth: number;
    selectedYear: number;
  }

  interface IDay {
    day: number;
    currentDay: boolean;
    selected: boolean;
    disabled: boolean;
  }

  interface IYear {
    year: number;
    selected: boolean;
  }

  export default {
    name:       'VueCalendar',
    components: {
      VueHeadline,
      VueButton,
    },
    props:      {
      today:          {
        type:     Date,
        required: false,
        default:  () => new Date(),
      },
      minDate:        {
        type:     Date,
        required: false,
      },
      maxDate:        {
        type:     Date,
        required: false,
      },
      firstDayOfWeek: {
        type:     Number,
        required: false,
        default:  0,
      },
      startDate:      {
        type:     Date,
        required: false,
      },
      endDate:        {
        type:     Date,
        required: false,
      },
      selectedDate:   {
        type:     Date,
        required: false,
      },
    },
    computed:   {
      calculatedDate(): Date {
        return new Date(this.selectedYear, this.selectedMonth, this.selectedDay);
      },
      calendar(): IDay[][] {
        let days: number[] = [];

        const paddingLeft = new Date(this.currentYear, this.currentMonth, 1).getDay() - this.firstDayOfWeek;
        const daysInMonth = 32 - new Date(this.currentYear, this.currentMonth, 32).getDate();

        if (paddingLeft >= 0) {
          days = days.concat(Array(paddingLeft).fill(null));
        }

        for (let i = 0; i < daysInMonth; i++) {
          days.push(i + 1);
        }

        const paddingRight = (Math.ceil(days.length / 7) * 7) - days.length;

        days = days.concat(Array(paddingRight).fill(null));

        const dayObjects: IDay[] = days.map((day: number): IDay => {
          const date: Date = day ? new Date(this.currentYear, this.currentMonth, day) : new Date(0, 0, 0);
          const currentDay: boolean = date.getTime() === new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()).getTime();
          let disabled: boolean = this.dayDisabled(day, date);
          let selected: boolean = date.getTime() === this.calculatedDate.getTime();

          if (this.startDate) {
            disabled = date.getTime() < this.startDate.getTime();
            selected = date.getTime() >= this.startDate.getTime() && date.getTime() <= this.calculatedDate.getTime();
          }

          if (this.endDate) {
            selected = date.getTime() <= this.endDate.getTime() && date.getTime() >= this.calculatedDate.getTime();
          }

          if (day === null) {
            selected = false;
          }

          return { day, currentDay, selected, disabled } as IDay;
        });

        return chunk(dayObjects, 7);
      },
      years(): IYear[] {
        let firstYear;

        if (this.minDate) {
          firstYear = this.minDate.getFullYear();
        } else {
          firstYear = (new Date()).getFullYear();
        }

        const through = this.maxDate ? (this.maxDate.getFullYear() + 1) - firstYear : 101;
        const years = [];

        for (let i = firstYear, len = firstYear + through; i < len; i++) {
          years.push(i);
        }

        return years.map((year) => {
          return { year, selected: year === this.selectedYear } as IYear;
        });
      },
      weekdays(): string[] {
        const weekdays: string[] = [
          this.$t('components.calendar.sunday.short' /* S */),
          this.$t('components.calendar.monday.short' /* M */),
          this.$t('components.calendar.tuesday.short' /* T */),
          this.$t('components.calendar.wednesday.short' /* W */),
          this.$t('components.calendar.thursday.short' /* T */),
          this.$t('components.calendar.friday.short' /* F */),
          this.$t('components.calendar.saturday.short' /* S */),
        ];
        const orderedDays: string[] = [];
        let startDay: number = this.firstDayOfWeek;

        for (let i = 0; i < 7; i++) {
          orderedDays.push(weekdays[startDay]);

          startDay++;

          if (startDay === 7) {
            startDay = 0;
          }
        }

        return orderedDays;
      },
    },
    created() {
      this.setDate();
    },
    data(): IData {
      return {
        selecting:         'date',
        currentMonth:      null,
        currentYear:       null,
        selectedDayOfWeek: null,
        selectedDay:       null,
        selectedMonth:     null,
        selectedYear:      null,
      };
    },
    methods:    {
      setSelecting(value: string): void {
        this.selecting = value;
      },
      setByDay(day: IDay): void {
        if (day.disabled) {
          return;
        }

        this.selectedYear = this.currentYear;
        this.selectedDay = day.day;
        this.selectedMonth = this.currentMonth;
        this.selectedDayOfWeek = new Date(this.selectedYear, this.selectedMonth, day.day).getDay();
      },
      setByMonth(month: number): void {
        if (month === 12) {
          this.currentYear = this.currentYear + 1;
          this.currentMonth = 0;

          return;
        }

        if (month === -1) {
          this.currentYear = this.currentYear - 1;
          this.currentMonth = 11;

          return;
        }

        this.currentMonth = month;
      },
      setByYear(year: number): void {
        this.selectedYear = year;
        this.currentYear = year;
        this.selecting = 'date';
      },
      setDate(): void {
        let date: Date = this.today;

        this.selectedDay = date.getDate();

        if (this.minDate) {
          date = this.minDate;
          this.selectedDay = this.minDate.getDate() + 1;
        }

        if (this.startDate) {
          date = this.startDate;
          this.selectedDay = this.startDate.getDate();
        }

        if (this.selectedDate) {
          date = this.selectedDate;
          this.selectedDay = this.selectedDate.getDate();
        }

        this.selectedDayOfWeek = date.getDay();
        this.selectedMonth = date.getMonth();
        this.currentMonth = date.getMonth();
        this.selectedYear = date.getFullYear();
        this.currentYear = date.getFullYear();
      },
      dayDisabled(day: number, date: Date): boolean {
        let disabled: boolean = false;

        if (!day) {
          disabled = true;
        } else if (this.minDate && date.getTime() < this.minDate.getTime()) {
          disabled = true;
        } else if (this.maxDate && date.getTime() > this.maxDate.getTime()) {
          disabled = true;
        }

        return disabled;
      },
      onChange(): void {
        this.$emit('change', this.calculatedDate);
        this.onClose();
      },
      onClose(): void {
        this.$emit('close');
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .calendar {
    width:      100%;
    max-width:  $calendar-max-width;
    position:   relative;
    box-shadow: $calendar-shadow;
    background: $calendar-bg;
    margin:     $calendar-margin;
    display:    inline-block;
  }

  .header {
    color:       $calendar-header-color;
    padding:     $calendar-header-padding;
    background:  $calendar-header-bg;
    text-shadow: $calendar-header-text-shadow;
    cursor:      pointer;

    h4, h5 {
      margin: 0;
    }
  }

  .body {
    border:  $calendar-body-border;
    padding: $calendar-body-padding;

    table {
      display: block;

      thead, tbody {
        display: block;
      }

      tr {
        display:   flex;
        flex-wrap: wrap;

        td {
          &:before {
            content:     "";
            float:       left;
            padding-top: 100%;
          }
          border-radius: $calendar-day-border-radius;
          flex:          1;
          text-align:    center;

          &:hover {
            background: $calendar-day-hover;
            cursor:     pointer;
          }

          span {
            position: relative;
            top:      $space-unit - 0.1;

            @include mediaMin(tabletPortrait) {
              top: 15%;
            }

            @include mediaMin(largeDesktop) {
              top: 17%;
            }
          }
        }
      }
    }
  }

  .date {
    display: flex;
  }

  .arrow {
    height:     $space-unit * 4;
    flex:       1 0 15%;
    position:   relative;
    cursor:     pointer;
    background: $calendar-arrow-bg;

    &:hover {
      background: $calendar-arrow-hover-bg;
    }

    &:before, &:after {
      content:          "";
      transition:       all 0.25s ease-in-out;
      position:         absolute;
      background-color: $calendar-arrow-color;
      width:            2px;
      height:           13px;
      top:              4px;
      left:             $space-unit * 2;
    }

    &:before {
      transform: translate(4px, 0) rotate(45deg);
    }

    &:after {
      transform: translate(4px, 8px) rotate(135deg);
    }

    &:last-child {
      text-align: right;

      &:before, &:after {
        right: $space-unit * 3;
        left:  initial;
      }

      &:before {
        transform: translate(4px, 0) rotate(-45deg);
      }

      &:after {
        transform: translate(4px, 8px) rotate(-135deg);
      }
    }
  }

  .currentDate {
    cursor:      default;
    text-align:  center;
    flex:        1 0 70%;
    font-weight: $font-weight-regular;
  }

  .currentDay {
    font-weight: $calendar-current-day-font-weight;
    background:  $calendar-current-day-bg;
    color:       $calendar-current-day-color;

    &:hover {
      background-color: $calendar-current-day-bg !important;
    }
  }

  .selectedDay {
    font-weight:      $calendar-selected-day-font-weight;
    background-color: $calendar-selected-day-bg;
    color:            $calendar-selected-day-color;

    &:hover {
      background-color: $calendar-selected-day-bg !important;
    }
  }

  .disabledDay {
    opacity:     0.4;
    user-select: none;
    outline:     transparent;
  }

  .year {
    box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.075);
    max-height: 312px;
    overflow-y: scroll;
    text-align: center;

    div {
      cursor:     pointer;
      padding:    $space-unit 0;
      transition: background-color .15s;

      &:hover {
        background-color: $bg-color;
      }
    }

    .selected {
      font-size: $font-size-h4;
    }
  }

  .footer {
    padding:         $space-unit * 2;
    display:         flex;
    justify-content: flex-end;
    border:          $calendar-body-border;
    border-top:      none;

    button {
      margin-bottom: 0;

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
