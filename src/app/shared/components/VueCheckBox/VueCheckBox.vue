<template>
  <div :class="cssClasses" :aria-label="label" @click="onClick">
    <input :type="inputType" :name="id" :id="id" :checked="checked" />
    <label :for="id">{{label}}</label>
  </div>
</template>

<script lang="ts">
  export default {
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
        width:      24px;
        height:     24px;
        background: #FFF;
        cursor:     pointer;
        transition: background 200ms cubic-bezier(0, .84, .83, .67);
      }

      &:after {
        opacity:                    0;
        transform:                  rotate(-45deg) scale(3);
        top:                        6px;
        left:                       4px;
        width:                      15px;
        height:                     6px;
        border:                     2px solid #FFF;
        border-top-style:           none;
        border-right-style:         none;

        transition-property:        opacity, transform;
        transition-duration:        200ms;
        transition-timing-function: cubic-bezier(0, .84, .83, .67);
      }
    }

    input[type="checkbox"] {
      outline:      0;
      margin-right: 16px;

      &:checked {
        + label:before {
          background: $brand-accent;
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
        width:         24px;
        height:        24px;
        background:    #FFF;
        cursor:        pointer;
        transition:    background 200ms cubic-bezier(0, .84, .83, .67);
        border-radius: 50%;
      }

      &:after {
        opacity:                    0;
        transform:                  scale(3);
        top:                        4px;
        left:                       4px;
        width:                      16px;
        height:                     16px;
        border-radius:              50%;
        background-color:           #FFF;

        transition-property:        opacity, transform;
        transition-duration:        200ms;
        transition-timing-function: cubic-bezier(0, .84, .83, .67);
      }
    }

    input[type="radio"] {
      outline:      0;
      margin-right: 16px;

      &:checked {
        + label:before {
          background: $brand-accent;
        }

        + label:after {
          transform:           scale(1);
          opacity:             1;
          transition-property: opacity;
        }
      }
    }
  }

  .disabled {
    opacity: .6;
  }
</style>
