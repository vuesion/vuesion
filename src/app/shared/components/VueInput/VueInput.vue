<template>
  <div :class="cssClasses">
    <input
      :required="required"
      v-model="parentValue"
      :type="type"
      :disabled="disabled"
      :class="[
        parentValue === '' ? '' : $style.hasValue
      ]"
    />
    <span :class="$style.bar" />
    <label>{{placeholder}}</label>
    <div :class="$style.message">{{message}}</div>
  </div>
</template>

<script lang="ts">
  export default {
    components: {},
    props: {
      placeholder: {
        type: String,
        default: '',
      },
      required: {
        type: Boolean,
        default: false,
      },
      value: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      message: {
        type: String,
        default: '',
      },
    },
    data: function () {
      return {
        parentValue: this.value,
      };
    },
    computed: {
      cssClasses() {
        const classes = [this.$style.vueInput];

        if (this.disabled) {
          classes.push(this.$style.disabled);
        }

        return classes;
      },
    },
    methods: {},
  };
</script>

<style lang="scss" module>
  @import "../../variables";

  .vueInput {
    position: relative;
    margin:   $input-margin;

    input,
    input:active,
    input:focus,
    input:hover {
      outline: none !important;
    }

    input {
      background-color: $input-background-color;
      border:           none;
      border-bottom:    $input-border-bottom;
      padding:          $input-padding;
      display:          block;
      width:            100%;
      font-size:        $input-font-size;
      color:            $input-color;
      height:           $input-height;

      &:disabled {
        color: $input-color-disabled;
      }
    }

    label {
      color:          $input-placeholder-color;
      font-size:      $input-placeholder-font-size;
      font-weight:    $input-placeholder-font-weight;
      position:       absolute;
      pointer-events: none;
      top:            $input-placeholder-top;
      transition:     0.2s ease all;
    }

    input:focus ~ label,
    input.hasValue ~ label {
      top:         -$input-placeholder-top;
      font-size:   $input-placeholder-active-font-size;
      font-weight: $input-placeholder-active-font-weight;
      color:       $input-placeholder-active-font-color;
      height:      $input-placeholder-active-height;
    }

    .bar {
      position: relative;
      display:  block;
      width:    100%;
    }

    .bar:before,
    .bar:after {
      content:    '';
      height:     $input-bar-height;
      width:      0;
      bottom:     0;
      position:   absolute;
      background: $input-bar-color;
      transition: all 0.2s ease-in-out;
    }

    .bar:before {
      left: 50%;
    }

    .bar:after {
      right: 50%;
    }

    input:focus ~ .bar:before,
    input:focus ~ .bar:after {
      width: 50%;
    }

    .message {
      display:     block;
      height:      $input-message-height;
      padding:     $input-message-padding;
      position:    relative;
      color:       $input-message-color;
      font-size:   $input-message-font-size;
      font-weight: $input-message-font-weight;
    }
  }
</style>
