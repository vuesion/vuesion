<template>
  <div :class="cssClasses" :aria-label="label" @click="onClick">
    <input :type="inputType" :name="id" :id="id" :checked="checked" />
    <label :for="id">{{label}}</label>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'VueCheckBox',
    components: {},
    props: {
      id: {
        type: String,
        required: true,
      },
      checked: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      radio: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        required: true,
      }
    },
    data(): any {
      return {};
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
      }
    },
    methods: {
      onClick(e: Event) {
        e.preventDefault();

        if (this.disabled === false) {
          this.$emit('click', e);
        }
      }
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .checkbox {
    cursor:      pointer;
    user-select: none;
    color:       $checkbox-color;
    display:     inline-block;
    margin:      $checkbox-margin;
    padding:     $checkbox-padding;
    position:    relative;

    label {
      cursor: pointer;
      &:before, &:after {
        content:  "";
        position: absolute;
        left:     0;
        top:      0;
      }

      &:before {
        width:      $checkbox-size;
        height:     $checkbox-size;
        background: $checkbox-bg;
        cursor:     pointer;
        transition: $checkbox-transition;
      }

      &:after {
        opacity:                    0;
        transform:                  rotate(-45deg) scale(3);
        top:                        $checkbox-size / 4;
        left:                       floor($checkbox-size / 5);
        width:                      ($checkbox-size / 1.5) - 1;
        height:                     $checkbox-size / 4;
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
      outline: 0;
      margin:  $checkbox-check-margin;

      &:checked {
        + label:before {
          background: $checkbox-checked-bg;
        }

        + label:after {
          transform:           rotate(-45deg) scale(1);
          opacity:             1;
          transition-property: opacity;
        }
      }
    }
  }

  .radio {
    cursor:      pointer;
    user-select: none;
    color:       $checkbox-color;
    display:     inline-block;
    margin:      $checkbox-margin;
    padding:     $checkbox-padding;
    position:    relative;

    label {
      cursor: pointer;
      &:before, &:after {
        content:  "";
        position: absolute;
        left:     0;
        top:      0;
      }

      &:before {
        width:         $checkbox-size;
        height:        $checkbox-size;
        background:    $checkbox-bg;
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
      left:     4px;
      position: relative;

      &:checked {
        + label:before {
          background: $checkbox-checked-bg;
        }

        + label:after {
          opacity: 1;
        }
      }
    }
  }

  .disabled {
    opacity: .6;
  }
</style>
