<template>
  <div ref="calendarRef" :class="$style.calendar">
    <div :class="$style.header">
      <vue-text
        appearance="h4"
        as="div"
        role="button"
        tabindex="0"
        :aria-label="selectedYear"
        @click="setSelecting('year')"
        @keypress.enter.space.stop.prevent="setSelecting('year')"
      >
        {{ selectedYear }}
      </vue-text>
      <vue-text
        appearance="h5"
        as="div"
        role="button"
        tabindex="0"
        :aria-label="$d(calculatedDate, 'calendarHeader')"
        @click="setSelecting('date')"
        @keypress.enter.space.stop.prevent="setSelecting('date')"
      >
        {{ $d(calculatedDate, 'calendarHeader') }}
      </vue-text>
    </div>

    <div v-if="selecting === 'date'" :class="$style.body">
      <div :class="$style.date">
        <div
          :class="$style.arrow"
          role="button"
          :aria-label="$t('components.calendar.previousMonth' /* previous month */)"
          tabindex="0"
          @click="setByMonth(currentMonth - 1)"
          @keypress.enter.space.stop.prevent="setByMonth(currentMonth - 1)"
        />

        <div :class="$style.currentDate">
          {{ $d(new Date(currentYear, currentMonth, 1), 'calendarNav') }}
        </div>

        <div
          :class="$style.arrow"
          role="button"
          :aria-label="$t('components.calendar.nextMonth' /* next month */)"
          tabindex="0"
          @click="setByMonth(currentMonth + 1)"
          @keypress.enter.space.stop.prevent="setByMonth(currentMonth + 1)"
        />
      </div>

      <table>
        <thead>
          <tr>
            <td
              v-for="(weekday, idx) in weekdays([
                $t('components.calendar.sunday.short' /* S */).toString(),
                $t('components.calendar.monday.short' /* M */).toString(),
                $t('components.calendar.tuesday.short' /* T */).toString(),
                $t('components.calendar.wednesday.short' /* W */).toString(),
                $t('components.calendar.thursday.short' /* T */).toString(),
                $t('components.calendar.friday.short' /* F */).toString(),
                $t('components.calendar.saturday.short' /* S */).toString(),
              ])"
              :key="`weekday-${idx}`"
              :class="$style.disabledDay"
            >
              <span>{{ weekday }}</span>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(days, daysIdx) in calendar" :key="`days-${daysIdx}`">
            <td
              v-for="(day, dayIdx) in days"
              :key="`day-${dayIdx}`"
              :class="[
                day.currentDay ? $style.currentDay : '',
                day.disabled ? $style.disabledDay : '',
                day.selected ? $style.selectedDay : '',
              ]"
              :tabindex="day.day ? 0 : null"
              :aria-label="day.day ? $d(new Date(currentYear, currentMonth, day.day), 'calendarLabel') : null"
              @keydown.enter.stop.prevent="setByDay(day)"
              @keydown.space.stop.prevent="setByDay(day)"
              @click="setByDay(day)"
            >
              <span>{{ day.day }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="selecting === 'year'" :class="[$style.year, 'year']">
      <div
        v-for="year in years"
        :id="`${year.year}-calendar-year`"
        :key="year.year"
        :class="[year.selected && $style.selected, year.selected && 'selected']"
        :aria-label="year.year"
        tabindex="0"
        @click="setByYear(year.year)"
        @keypress.enter.space.stop.prevent="setByYear(year.year)"
      >
        {{ year.year }}
      </div>
    </div>

    <div :class="$style.footer">
      <vue-button ghost @click.stop.prevent="onClose">
        {{ $t('common.cancel' /* Cancel */) }}
      </vue-button>
      &nbsp;
      <vue-button color="primary" @click.stop.prevent="onChange">
        {{ $t('common.ok' /* Ok */) }}
      </vue-button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, onBeforeMount } from '@vue/composition-api';
import chunk from 'lodash/chunk';
import { getDomRef } from '@/composables/get-dom-ref';
import VueButton from '../../atoms/VueButton/VueButton.vue';
import VueText from '../../atoms/VueText/VueText.vue';

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

export default defineComponent({
  name: 'VueCalendar',
  components: {
    VueText,
    VueButton,
  },
  model: {
    prop: 'selectedDate',
    event: 'change',
  },
  props: {
    selectedDate: { type: Date, default: null },
    minDate: { type: Date, default: null },
    maxDate: { type: Date, default: null },
    firstDayOfWeek: { type: Number, default: 0 },
    startDate: { type: Date, default: null },
    endDate: { type: Date, default: null },
    today: { type: Date as new () => Date, default: (): Date => new Date() },
  },
  setup(props, { root, emit }) {
    const calendarRef = getDomRef(null);
    const selecting = ref('date');
    const currentMonth = ref<number>(null);
    const currentYear = ref<number>(null);
    const selectedDayOfWeek = ref<number>(null);
    const selectedDay = ref<number>(null);
    const selectedMonth = ref<number>(null);
    const selectedYear = ref<number>(null);
    const calculatedDate = computed(() => new Date(selectedYear.value, selectedMonth.value, selectedDay.value));
    const dayDisabled = (day: number, date: Date) => {
      let disabled = false;

      if (!day) {
        disabled = true;
      } else if (props.minDate && date.getTime() < props.minDate.getTime()) {
        disabled = true;
      } else if (props.maxDate && date.getTime() > props.maxDate.getTime()) {
        disabled = true;
      }

      return disabled;
    };
    const calendar = computed<IDay[][]>(() => {
      let days: number[] = [];

      let paddingLeft = new Date(currentYear.value, currentMonth.value, 1).getDay() - props.firstDayOfWeek;
      const daysInMonth = 32 - new Date(currentYear.value, currentMonth.value, 32).getDate();

      if (paddingLeft === -1) {
        paddingLeft = 6;
      }

      days = days.concat(Array(paddingLeft).fill(null));

      for (let i = 0; i < daysInMonth; i++) {
        days.push(i + 1);
      }

      const paddingRight = Math.ceil(days.length / 7) * 7 - days.length;

      days = days.concat(Array(paddingRight).fill(null));

      const dayObjects: IDay[] = days.map(
        (day: number): IDay => {
          const date: Date = day ? new Date(currentYear.value, currentMonth.value, day) : new Date(0, 0, 0);
          const currentDay: boolean =
            date.getTime() ===
            new Date(props.today.getFullYear(), props.today.getMonth(), props.today.getDate()).getTime();
          let disabled: boolean = dayDisabled(day, date);
          let selected: boolean = date.getTime() === calculatedDate.value.getTime();

          if (props.startDate) {
            disabled = disabled || date.getTime() < props.startDate.getTime();
            selected = date.getTime() >= props.startDate.getTime() && date.getTime() <= calculatedDate.value.getTime();
          }

          if (props.endDate) {
            selected = date.getTime() <= props.endDate.getTime() && date.getTime() >= calculatedDate.value.getTime();
          }

          if (day === null) {
            selected = false;
          }

          return { day, currentDay, selected, disabled };
        },
      );

      return chunk(dayObjects, 7);
    });
    const years = computed<IYear[]>(() => {
      let firstYear;
      const yearRange = 100;

      if (props.minDate) {
        firstYear = props.minDate.getFullYear();
      } else if (props.maxDate) {
        firstYear = props.maxDate.getFullYear() - yearRange;
      } else {
        firstYear = new Date().getFullYear() - yearRange / 2;
      }
      const yearNumbers = [];

      for (let i = firstYear; i < firstYear + (yearRange + 1); i++) {
        yearNumbers.push(i);
      }

      return yearNumbers.map((year) => {
        return { year, selected: year === selectedYear.value };
      });
    });
    const weekdays = computed(() => (weekdayTanslations: string[]) => {
      const orderedDays: string[] = [];
      let startDay: number = props.firstDayOfWeek;

      for (let i = 0; i < 7; i++) {
        orderedDays.push(weekdayTanslations[startDay]);

        startDay++;

        if (startDay === 7) {
          startDay = 0;
        }
      }

      return orderedDays;
    });
    const setDate = () => {
      let date: Date = props.today;

      selectedDay.value = date.getDate();

      if (props.minDate) {
        date = props.minDate;
        selectedDay.value = props.minDate.getDate() + 1;
      }

      if (props.startDate) {
        date = props.startDate;
        selectedDay.value = props.startDate.getDate();
      }

      if (props.selectedDate) {
        date = props.selectedDate;
        selectedDay.value = props.selectedDate.getDate();
      }

      selectedDayOfWeek.value = date.getDay();
      selectedMonth.value = date.getMonth();
      currentMonth.value = date.getMonth();
      selectedYear.value = date.getFullYear();
      currentYear.value = date.getFullYear();
    };
    const scrollSelectedYearIntoView = () => {
      const yearContainer: HTMLElement = calendarRef.value.querySelector(`.year`);
      const selectedYear: HTMLElement = yearContainer.querySelector(`.selected`);

      yearContainer.scrollTop =
        selectedYear.offsetTop -
        (yearContainer.getBoundingClientRect().height / 2 + selectedYear.getBoundingClientRect().height);
    };
    const setSelecting = (value: string) => {
      selecting.value = value;

      /* istanbul ignore next */
      if (selecting.value === 'year') {
        root.$nextTick(() => scrollSelectedYearIntoView());
      }
    };
    const setByDay = (day: IDay) => {
      if (day.disabled) {
        return;
      }

      selectedYear.value = currentYear.value;
      selectedDay.value = day.day;
      selectedMonth.value = currentMonth.value;
      selectedDayOfWeek.value = new Date(selectedYear.value, selectedMonth.value, day.day).getDay();
    };
    const setByMonth = (month: number) => {
      if (month === 12) {
        currentYear.value = currentYear.value + 1;
        currentMonth.value = 0;

        return;
      }

      if (month === -1) {
        currentYear.value = currentYear.value - 1;
        currentMonth.value = 11;

        return;
      }

      currentMonth.value = month;
    };
    const setByYear = (year: number) => {
      selectedYear.value = year;
      currentYear.value = year;
      selecting.value = 'date';
    };
    const onClose = () => {
      emit('close');
    };
    const onChange = () => {
      emit('change', calculatedDate.value);
    };

    onBeforeMount(() => setDate());

    return {
      calendarRef,
      selecting,
      currentMonth,
      currentYear,
      selectedDayOfWeek,
      selectedDay,
      selectedMonth,
      selectedYear,
      calculatedDate,
      dayDisabled,
      calendar,
      years,
      weekdays,
      setDate,
      scrollSelectedYearIntoView,
      setSelecting,
      setByDay,
      setByMonth,
      setByYear,
      onChange,
      onClose,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.calendar {
  width: 100%;
  max-width: $calendar-max-width;
  position: relative;
  box-shadow: $calendar-shadow;
  background: $calendar-bg;
  display: inline-block;
}

.header {
  color: $calendar-header-color;
  padding: $calendar-header-padding;
  background: $calendar-header-bg;
  text-shadow: $calendar-header-text-shadow;

  cursor: pointer;

  * {
    font-weight: $calendar-header-font-weight;
  }
}

.body {
  border: $calendar-body-border;
  padding: $calendar-body-padding;

  table {
    display: block;

    thead,
    tbody {
      display: block;
    }

    tr {
      display: flex;
      flex-wrap: wrap;

      td {
        &:before {
          content: '';
          float: left;
          padding-top: 100%;
        }
        border-radius: $calendar-day-border-radius;
        flex: 1;
        text-align: center;

        &:hover {
          background: $calendar-day-hover;
          cursor: pointer;
        }

        span {
          position: relative;
          top: 20%;
        }
      }
    }
  }
}

.date {
  display: flex;
  height: $space-32;
  flex-direction: row;
}

.arrow {
  flex: 1 0 15%;
  cursor: pointer;
  background: $calendar-arrow-bg;
  position: relative;

  &:hover {
    background: $calendar-arrow-hover-bg;
  }

  &:before,
  &:after {
    content: '';
    transition: all 0.25s ease-in-out;
    position: absolute;
    background-color: $calendar-arrow-color;
    width: $space-2;
    height: $space-12;
    left: 50%;
    top: $space-4;
  }

  &:before {
    transform: translate($space-4, 0) rotate(45deg);
  }

  &:after {
    transform: translate($space-4, $space-8) rotate(135deg);
  }

  &:last-child {
    &:before,
    &:after {
    }

    &:before {
      transform: translate($space-4, 0) rotate(-45deg);
    }

    &:after {
      transform: translate($space-4, $space-8) rotate(-135deg);
    }
  }
}

.currentDate {
  cursor: default;
  text-align: center;
  flex: 1 0 70%;
  font-weight: $font-weight-regular;
}

.currentDay {
  font-weight: $calendar-current-day-font-weight;
  background: $calendar-current-day-bg;
  color: $calendar-current-day-color;

  &:hover {
    background-color: $calendar-current-day-bg !important;
  }
}

.selectedDay {
  font-weight: $calendar-selected-day-font-weight;
  background-color: $calendar-selected-day-bg;
  color: $calendar-selected-day-color;

  &:hover {
    background-color: $calendar-selected-day-bg !important;
  }
}

.disabledDay {
  opacity: 0.4;
  user-select: none;
  outline: transparent;
}

.year {
  border: $calendar-body-border;
  padding: $calendar-body-padding;
  max-height: 312px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  text-align: center;

  > div {
    cursor: pointer;
    padding: $space-8 0;
    transition: background-color 0.15s;

    &:hover {
      background: $calendar-day-hover;
    }
  }

  .selected {
    font-size: $text-4;
    color: $calendar-selected-day-color;
    background: $calendar-selected-day-bg;

    &:hover {
      background: $calendar-selected-day-bg;
    }
  }
}

.footer {
  padding: $space-12;
  display: flex;
  justify-content: flex-end;
  border: $calendar-body-border;
  border-top: none;
}
</style>
