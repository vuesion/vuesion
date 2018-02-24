<template>
  <div :class="[$style.vueDateRangePicker, cssClass]">
    <vue-date-picker
      :min-date="minDate"
      :max-date="maxDate"
      :first-day-of-week="firstDayOfWeek"
      :placeholder="placeholderStart"
      :end-date="endDate"
      :current-date="startDate"
      @change="onStartChange" />
    <vue-date-picker
      :min-date="minDate"
      :max-date="maxDate"
      :first-day-of-week="firstDayOfWeek"
      :placeholder="placeholderEnd"
      :start-date="startDate"
      :current-date="endDate"
      @change="onEndChange" />
  </div>
</template>

<script lang="ts">
  import VueDatePicker from '../VueDatePicker/VueDatePicker.vue';

  export default {
    name:       'VueDateRangePicker',
    components: {
      VueDatePicker,
    },
    props:      {
      cssClass: {
        type:    String,
        default: 'vueDateRangePicker',
      },
      minDate:          {
        type:     Date,
        required: false,
      },
      maxDate:          {
        type:     Date,
        required: false,
      },
      firstDayOfWeek:   {
        type:     Number,
        required: false,
        default:  0,
      },
      placeholderStart: {
        type:     String,
        required: false,
        default:  '',
      },
      placeholderEnd:   {
        type:     String,
        required: false,
        default:  '',
      },
    },
    data(): any {
      return {
        startDate: null,
        endDate:   null,
      };
    },
    computed:   {},
    methods:    {
      onStartChange(startDate: Date) {
        this.startDate = startDate;

        if (this.endDate && this.endDate.getTime() < this.startDate.getTime()) {
          this.endDate = this.startDate;
        }
      },
      onEndChange(endDate: Date) {
        this.endDate = endDate;
        this.$emit('change', [this.startDate, this.endDate]);
      },
    },
  };
</script>

<style lang="scss" module>
  .vueDateRangePicker {
    display: block;
  }
</style>
