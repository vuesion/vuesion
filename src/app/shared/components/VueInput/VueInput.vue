<template>
  <div :class="cssClasses">
    <input
      :name="name"
      :id="id"
      :required="required"
      :value="value"
      :type="type"
      :autocomplete="type"
      :disabled="disabled"
      :readonly="readonly"
      :class="[
        value ? $style.hasValue : ''
      ]"
      v-bind="$attrs"
      v-on="$listeners"
    />
    <span :class="$style.bar"></span>
    <label :for="name">{{placeholder}}<sup v-if="required">*</sup></label>
    <div :class="$style.message">{{message}}</div>
  </div>
</template>

<script lang="ts">
  export default {
    name:       'VueInput',
    components: {},
    props:      {
      cssClass:    {
        type:    String,
        default: 'vueInput',
      },
      name:        {
        type:     String,
        required: false,
      },
      id:        {
        type:     String,
        required: false,
      },
      placeholder: {
        type:    String,
        default: '',
      },
      required:    {
        type:    Boolean,
        default: false,
      },
      isValid:     {
        type:    Boolean,
        default: true,
      },
      value:       {
        type:    String,
        default: '',
      },
      type:        {
        type:    String,
        default: 'text',
      },
      disabled:    {
        type:    Boolean,
        default: false,
      },
      readonly:    {
        type:    Boolean,
        default: false,
      },
      message:     {
        type:    String,
        default: '',
      },
    },
    data() {
      return {};
    },
    computed:   {
      cssClasses() {
        const classes = [this.$style.vueInput];

        if (this.disabled) {
          classes.push(this.$style.disabled);
        }

        if (!this.isValid) {
          classes.push(this.$style.error);
        }

        classes.push(this.cssClass);

        return classes;
      },
    },
    methods:    {
      onChange(e: Event): void {
        this.$emit('change', e);
      },
      onFocus(e: any) {
        if (this.readonly) {
          e.target.blur();
        }
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

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
      font-family:      $input-font-family;
      font-size:        $input-font-size;
      color:            $input-color;
      height:           $input-height;
      border-radius:    0;

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
      top:         -($space-unit * 2.5);
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

    &.error {
      input {
        border-bottom-color: $brand-warn;
      }

      input:focus ~ label,
      input.hasValue ~ label {
        color: $brand-warn;
      }

      .bar {
        &:before,
        &:after {
          background: $brand-warn;
        }
      }
    }
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
</style>
