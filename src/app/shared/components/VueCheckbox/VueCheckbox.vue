<template>
  <div :class="cssClasses" :aria-label="label">
    <input
      :type="inputType"
      :name="name"
      :id="id"
      :checked="checked || value"
      :required="required"
      :disabled="disabled"
      @change.prevent="onClick"
      v-bind="$attrs" />
    <div :class="$style.box" @click="onClick" />
    <label :for="name" v-html="label" />
  </div>
</template>

<script lang="ts">
  export default {
    name:     'VueCheckbox',
    props:    {
      name:     {
        type:     String,
        required: true,
      },
      id:       {
        type:     String,
        required: true,
      },
      checked:  {
        type:    Boolean,
        default: false,
      },
      value:    {
        type:    Boolean,
        default: false,
      },
      disabled: {
        type:    Boolean,
        default: false,
      },
      required: {
        type:    Boolean,
        default: false,
      },
      radio:    {
        type:    Boolean,
        default: false,
      },
      label:    {
        type:     String,
        required: true,
      },
    },
    computed: {
      cssClasses() {
        const classes = [];

        if (this.radio) {
          classes.push(this.$style.radio);
        } else {
          classes.push(this.$style.checkbox);
        }

        if (this.disabled) {
          classes.push(this.$style.disabled);
        }

        return classes;
      },
      inputType() {
        if (this.radio) {
          return 'radio';
        } else {
          return 'checkbox';
        }
      },
    },
    methods:  {
      onClick(e: Event) {
        e.preventDefault();

        if (this.disabled === false) {
          this.$emit('click', e);
          this.$emit('input', !Boolean(this.value));
        }
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .checkbox {
    user-select: none;
    color:       $checkbox-color;
    display:     inline-block;
    margin:      $checkbox-margin;
    padding:     $checkbox-padding;
    position:    relative;

    label {
      display:      inline-block;
      padding-left: $checkbox-size + ($space-unit * 2);
      cursor:       pointer;
    }

    .box {
      &:before, &:after {
        content:  "";
        position: absolute;
        left:     0;
        top:      0;
        cursor:   pointer;
      }

      &:before {
        width:      $checkbox-size;
        height:     $checkbox-size;
        background: $checkbox-bg;
        border:     $checkbox-border;
        cursor:     pointer;
        transition: $checkbox-transition;
      }

      &:after {
        opacity:                    0;
        transform:                  rotate(-45deg) scale(3);
        top:                        $checkbox-size / 8;
        left:                       $checkbox-size / 12;
        width:                      $checkbox-size / 1.2;
        height:                     $checkbox-size / 2.5;
        border:                     $checkbox-check;
        border-top:                 none;
        border-right:               none;
        transition-property:        opacity, transform;
        transition-duration:        $transition-duration;
        transition-timing-function: cubic-bezier(0, .84, .83, .67);
        box-shadow:                 $checkbox-shadow;
      }
    }

    input[type="checkbox"] {
      outline:  0;
      margin:   $checkbox-check-margin;
      position: absolute;
      top:      2px;

      &:focus {
        + .box:before {
          background: $checkbox-checked-bg;
        }
      }

      &:checked {
        + .box:before {
          background: $checkbox-checked-bg;
        }

        + .box:after {
          transform:           rotate(-45deg) scale(1);
          opacity:             1;
          transition-property: opacity;
        }
      }
    }
  }

  .radio {
    user-select: none;
    color:       $checkbox-color;
    display:     inline-block;
    margin:      $checkbox-margin;
    padding:     $checkbox-padding;
    position:    relative;

    label {
      display:      inline-block;
      padding-left: $checkbox-size + ($space-unit * 2);
      cursor:       pointer;
    }

    .box {
      &:before, &:after {
        content:  "";
        position: absolute;
        left:     0;
        top:      0;
        cursor:   pointer;
      }

      &:before {
        width:         $checkbox-size;
        height:        $checkbox-size;
        background:    $checkbox-bg;
        border:        $checkbox-border;
        cursor:        pointer;
        transition:    $checkbox-transition;
        border-radius: 50%;
      }

      &:after {
        opacity:                    0;
        top:                        $checkbox-size / 6;
        left:                       $checkbox-size / 6;
        width:                      $checkbox-size / 1.5;
        height:                     $checkbox-size / 1.5;
        border-radius:              50%;
        background-color:           #FFF;
        transition-property:        opacity;
        transition-duration:        $transition-duration;
        transition-timing-function: cubic-bezier(0, .84, .83, .67);
        box-shadow:                 $checkbox-shadow;
      }
    }

    input[type="radio"] {
      outline:  0;
      margin:   $checkbox-check-margin;
      left:     6px;
      top:      6px;
      position: absolute;

      &:focus {
        + .box:before {
          background: $checkbox-checked-bg;
        }
      }

      &:checked {
        + .box:before {
          background: $checkbox-checked-bg;
        }

        + .box:after {
          opacity: 1;
        }
      }
    }
  }

  .disabled {
    opacity: .6;
  }
</style>
