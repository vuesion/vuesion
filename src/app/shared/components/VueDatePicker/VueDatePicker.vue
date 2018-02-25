<template>
  <div :class="[$style.vueDatePicker, cssClass]" @click="show = true">
    <vue-input :value="inputValue" :placeholder="placeholder" readonly />
    <vue-modal :show="show" :fit-content="true" @close="show = false">
      <vue-calendar
        :min-date="minDate"
        :max-date="maxDate"
        :first-day-of-week="firstDayOfWeek"
        :css-class="$style.calendar"
        :selected-date="date"
        :start-date="startDate"
        :end-date="endDate"
        @close="show = false"
        @change="onChange">
      </vue-calendar>
    </vue-modal>
  </div>
</template>

<script lang="ts">
  import VueInput    from '../VueInput/VueInput.vue';
  import VueModal    from '../VueModal/VueModal.vue';
  import VueCalendar from '../VueCalendar/VueCalendar.vue';

  export default {
    name:       'VueDatePicker',
    components: {
      VueInput,
      VueModal,
      VueCalendar,
    },
    props:      {
      cssClass:       {
        type:    String,
        default: 'vueDatePicker',
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
      placeholder:    {
        type:     String,
        required: false,
        default:  '',
      },
      startDate:      {
        type:     Date,
        required: false,
      },
      endDate:        {
        type:     Date,
        required: false,
      },
      currentDate:    {
        type:     Date,
        required: false,
      },
    },
    data(): any {
      return {
        show:         false,
        selectedDate: null,
      };
    },
    computed:   {
      inputValue() {
        const val: string = this.date === null ? '' : this.$d(this.date, 'datePicker');
        return val;
      },
      date() {
        if (this.currentDate) {
          return this.currentDate;
        }

        return this.selectedDate;
      },
    },
    methods:    {
      onChange(date: Date): void {
        this.selectedDate = date;
        this.$emit('change', this.selectedDate);
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueDatePicker {
    display: block;
  }

  .calendar {
    margin:    0;
    max-width: $modal-max-width;

    @include media(tabletPortrait) {
      table {
        tr {
          td {
            font-size: $font-size-h5;

            span {
              top: 25%;
            }
          }
        }
      }
    }
  }
</style>
