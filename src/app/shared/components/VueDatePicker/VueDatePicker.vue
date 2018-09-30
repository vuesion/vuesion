<template>
  <div :class="$style.vueDatePicker" @click="show = true">
    <vue-input
      :name="name"
      :id="id"
      :value="inputValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      :message="message"
      @focus="onFocus" />
    <vue-modal :show="show" :fit-content="true" @close="show = false">
      <vue-calendar
        :min-date="minDate"
        :max-date="maxDate"
        :first-day-of-week="firstDayOfWeek"
        :class="$style.calendar"
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
      name:           {
        type:    String,
        default: 'date',
      },
      id:             {
        type:    String,
        default: 'date',
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
      required:       {
        type:    Boolean,
        default: false,
      },
      disabled:       {
        type:    Boolean,
        default: false,
      },
      readonly:       {
        type:    Boolean,
        default: true,
      },
      message:        {
        type:    String,
        default: '',
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
        return this.date === null ? '' : this.$d(this.date, 'datePicker');
      },
      date() {
        if (this.currentDate) {
          return this.currentDate;
        }

        return this.selectedDate;
      },
    },
    methods:    {
      onFocus(e: any) {
        e.currentTarget.blur();
        this.show = true;
      },
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
    @include media(tabletPortrait) {
      width: $calendar-max-width !important;

      table {
        tr {
          td {
            font-size: $font-size-h5;

            span {
              top: 17%;
            }
          }
        }
      }
    }
  }
</style>
