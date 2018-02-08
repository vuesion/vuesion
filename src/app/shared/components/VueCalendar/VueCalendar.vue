<template>
  <div :class="[$style.calendar, customClass]">
    <div :class="$style.header">
      <h3 @click="setSelecting('year')">{{ selectedYear }}</h3>
      <h2 @click="setSelecting('date')">{{ $d(calculatedDate, 'calendarHeader') }}</h2>
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
          <td :class="[day.currentDay ? $style.currentDay : '', day.disabled ? $style.disabledDay : '', day.selected ? $style.selectedDay : '']"
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
      <div :class="[year.selected ? $style.selected : '']"
        :id="`${year.year}-calendar-year`"
        v-for="year in years"
        :key="year.year"
        @click="setByYear(year.year)">
        {{ year.year }}
      </div>
    </div>

    <div :class="$style.footer">
      <vue-button @click.stop.prevent="onClose" accent>Cancel</vue-button>
      <vue-button @click.stop.prevent="onChange" primary>Ok</vue-button>
    </div>
  </div>
</template>

<script lang="ts">
  import VueButton from '../VueButton/VueButton.vue';
  import chunk from 'lodash/chunk';

  interface IData {
    selecting: string,
    currentMonth: number,
    currentYear: number,
    selectedDayOfWeek: number,
    selectedDay: number,
    selectedMonth: number,
    selectedYear: number,
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
    name: 'VueCalendar',
    components: {
      VueButton,
    },
    props: {
      minDate: {
        type: Date,
        required: false,
      },
      maxDate: {
        type: Date,
        required: false,
      },
      firstDayOfWeek: {
        type: Number,
        required: false,
        default: 0,
      },
      startDate: {
        type: Date,
        required: false,
      },
      endDate: {
        type: Date,
        required: false,
      },
      customClass: {
        type: String,
        required: false,
        default: 'calendar',
      },
      selectedDate: {
        type: Date,
        required: false,
      },
    },
    computed: {
      calculatedDate(): Date {
        return new Date(this.selectedYear, this.selectedMonth, this.selectedDay);
      },
      calendar(): IDay[][] {
        let days: number[] = [];

        const paddingLeft = new Date(this.currentYear, this.currentMonth, 1).getDay() - this.firstDayOfWeek;
        const daysInMonth = 32 - new Date(this.currentYear, this.currentMonth, 32).getDate();
        const today = new Date();

        days = days.concat(Array(paddingLeft).fill(null));

        for (let i = 0, len = daysInMonth; i < daysInMonth; i++) {
          days.push(i + 1);
        }

        const paddingRight = (Math.ceil(days.length / 7) * 7) - days.length;

        days = days.concat(Array(paddingRight).fill(null));

        const dayObjects: IDay[] = days.map((day: number): IDay => {
          const date: Date = new Date(this.currentYear, this.currentMonth, day);
          const currentDay: boolean = date.getTime() === new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
          let disabled: boolean = this.dayDisabled(day, date);
          let selected: boolean = date.getTime() === this.calculatedDate.getTime();

          if (this.startDate) {
            disabled = date.getTime() < this.startDate.getTime();
            selected = date.getTime() >= this.startDate.getTime() && date.getTime() <= this.calculatedDate.getTime();
          }

          if (this.endDate && this.endDate.getTime() >= date.getTime()) {
            selected = date.getTime() <= this.endDate.getTime() && date.getTime() >= this.calculatedDate.getTime();
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
          firstYear = (new Date).getFullYear();
        }

        let through = this.maxDate ? (this.maxDate.getFullYear() + 1) - firstYear : 101;

        let years = [];

        for (let i = firstYear, len = firstYear + through; i < len; i++) {
          years.push(i);
        }

        return years.map((year) => {
          return { year, selected: year === this.selectedYear } as IYear;
        });
      },
      weekdays(): string[] {
        const weekdays: string[] = [
          this.$t('components.calendar.sunday.short' /*S*/),
          this.$t('components.calendar.monday.short' /*M*/),
          this.$t('components.calendar.tuesday.short' /*T*/),
          this.$t('components.calendar.wednesday.short' /*W*/),
          this.$t('components.calendar.thursday.short' /*T*/),
          this.$t('components.calendar.friday.short' /*F*/),
          this.$t('components.calendar.saturday.short' /*S*/),
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
      }
    },
    created() {
      this.setDate();
    },
    data(): IData {
      return {
        selecting: 'date',
        currentMonth: null,
        currentYear: null,
        selectedDayOfWeek: null,
        selectedDay: null,
        selectedMonth: null,
        selectedYear: null,
      };
    },
    methods: {
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
        const date: Date = new Date();

        this.selectedDay = date.getDate();

        if (this.minDate) {
          this.selectedDay = this.minDate.getDate() + 1;
        }

        if (this.startDate) {
          this.selectedDay = this.startDate.getDate();
        }

        if (this.selectedDate) {
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
    }
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .calendar {
    width:      100%;
    max-width:  $screen-phone;
    position:   relative;
    box-shadow: $panel-shadow;
    background: $panel-bg;
    margin:     0 $grid-unit * 2 $grid-unit * 2 0;
    display:    inline-block;
  }

  .header {
    color:       $text-color;
    padding:     $grid-unit * 2 $grid-unit * 3;
    background:  linear-gradient(170deg, $brand-accent 0%, $brand-dark-primary 100%);
    text-shadow: 0 2px 5px rgba(0, 0, 0, .33);

    h2, h3 {
      cursor: default;
      margin: 0;
    }

    h2 {
      font-size:   $font-size-h5 - 2;
      line-height: $font-size-h5 - 2;
    }

    h3 {
      font-size:   $font-size-h6;
      font-weight: 300;
      cursor:      pointer;
    }
  }

  .body {
    border-bottom: $accordion-item-header-border-top;
    padding:       $grid-unit * 2;

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
          border-radius: 50%;
          flex:          1;
          text-align:    center;

          &:hover {
            background: $bg-color;
            cursor:     pointer;
          }

          span {
            position: relative;
            top:      25%;
          }
        }
      }
    }
  }

  .date {
    display: flex;
  }

  .arrow {
    height:   $grid-unit * 4;
    flex:     1 0 15%;
    position: relative;
    cursor:   pointer;

    &:hover {
      background: $bg-color;
    }

    &:before, &:after {
      content:          "";
      transition:       all 0.25s ease-in-out;
      position:         absolute;
      background-color: $brand-accent;
      width:            2px;
      height:           13px;
      top:              4px;
      left:             $grid-unit * 2;
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
        right: $grid-unit * 3;
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
    font-size:   14px;
    font-weight: 500;
    padding-top: $grid-unit * 0.5;
  }

  .currentDay {
    font-weight:      bold;
    background-color: $brand-primary;
    color:            $bg-color;

    &:hover {
      background-color: $brand-primary !important;
    }
  }

  .selectedDay {
    font-weight:      bold;
    background-color: $brand-accent;
    color:            $bg-color;

    &:hover {
      background-color: $brand-accent !important;
    }
  }

  .disabledDay {
    opacity:     0.6;
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
      padding:    $grid-unit 0;
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
    padding:         $grid-unit;
    display:         flex;
    justify-content: flex-end;

    button {
      margin-bottom: 0;

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
