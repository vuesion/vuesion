<template>
  <vue-content-block as="section" :padding="['32 16 16 16', '32 16', '64 32']" :class="$style.VuesionPlusSection">
    <vue-stack :space="[32, 32, 64]" align-x="center">
      <vue-text look="h3" weight="black">
        {{ $t('VuesionPlusSection.title' /* Discover Vuesion+ Components */) }}
      </vue-text>

      <vue-stack :space="[32]">
        <vue-columns stack-phone stack-tablet-portrait :space="[32]">
          <vue-column :width="['full', 'full', '5/10']" no-grow>
            <vue-stack space="12" :class="$style.component">
              <vue-stack space="4">
                <vue-text look="h5" weight="black">
                  {{ $t('VuesionPlusSection.datatable.title' /* Datatable */) }}.
                </vue-text>

                <vue-text>
                  {{
                    $t(
                      'VuesionPlusSection.datatable.description' /* Efficiently organize and display data with our highly customizable Datatable component. Features include sorting, pagination, bulk actions, and advanced search capabilities. Ideal for applications that require robust data management and intuitive user interactions. */,
                    )
                  }}
                </vue-text>
              </vue-stack>
              <vue-inline space="8">
                <vue-button
                  look="primary"
                  trailing-icon="tag"
                  as="a"
                  href="https://vuesion.gumroad.com/l/datatable"
                  target="_blank"
                >
                  {{ $t('VuesionPlusSection.cta.BuyLicense' /* Buy License */) }}
                </vue-button>
                <vue-button
                  look="ghost"
                  trailing-icon="external-link"
                  as="a"
                  href="https://vuesion.herokuapp.com/storybook/?path=/story/vuesion-datatable--default"
                  target="_blank"
                >
                  {{ $t('VuesionPlusSection.cta.Demo' /* Demo */) }}
                </vue-button>
              </vue-inline>
            </vue-stack>
          </vue-column>
          <vue-column :width="['full', 'full', '5/10']" no-grow>
            <vue-stack space="12" :class="$style.component">
              <vue-stack space="4">
                <vue-text look="h5" weight="black">
                  {{ $t('VuesionPlusSection.dateComponents.title' /* Date Components */) }}.
                </vue-text>

                <vue-text>
                  {{
                    $t(
                      'VuesionPlusSection.dateComponents.description' /* Simplify date selection and management with our comprehensive Date Components suite. Includes a Gregorian Calendar, Date Picker, and Date Range Picker, all designed for ease of use and customization. Ideal for applications requiring flexible and user-friendly date inputs. */,
                    )
                  }}
                </vue-text>
              </vue-stack>
              <vue-inline space="8">
                <vue-button
                  look="primary"
                  trailing-icon="tag"
                  as="a"
                  href="https://vuesion.gumroad.com/l/date-components"
                  target="_blank"
                >
                  {{ $t('VuesionPlusSection.cta.BuyLicense' /* Buy License */) }}
                </vue-button>
                <vue-button
                  look="ghost"
                  trailing-icon="external-link"
                  as="a"
                  href="https://vuesion.herokuapp.com/storybook/?path=/story/vuesion-calendar--default"
                  target="_blank"
                >
                  {{ $t('VuesionPlusSection.cta.Demo' /* Demo */) }}
                </vue-button>
              </vue-inline>
            </vue-stack>
          </vue-column>
        </vue-columns>
        <vue-columns stack-phone stack-tablet-portrait :space="[32]">
          <vue-column :width="['full', 'full', '5/10']" no-grow>
            <vue-stack space="12" :class="$style.component">
              <vue-stack space="4">
                <vue-text look="h5" weight="black">
                  {{ $t('VuesionPlusSection.currencyInput.title' /* Currency Input */) }}.
                </vue-text>

                <vue-text>
                  {{
                    $t(
                      'VuesionPlusSection.currencyInput.description' /* Seamlessly manage and format floating-point values with our Currency Input component. Supports multiple currencies and locales, ensuring accurate and user-friendly data entry. Real-time formatting enhances the user experience and minimizes errors. */,
                    )
                  }}
                </vue-text>
              </vue-stack>
              <vue-inline space="8">
                <vue-button
                  look="primary"
                  trailing-icon="tag"
                  as="a"
                  href="https://vuesion.gumroad.com/l/currency-input"
                  target="_blank"
                >
                  {{ $t('VuesionPlusSection.cta.BuyLicense' /* Buy License */) }}
                </vue-button>
                <vue-button
                  look="ghost"
                  trailing-icon="external-link"
                  as="a"
                  href="https://vuesion.herokuapp.com/storybook/?path=/story/vuesion-currencyinput--default"
                  target="_blank"
                >
                  {{ $t('VuesionPlusSection.cta.Demo' /* Demo */) }}
                </vue-button>
              </vue-inline>
            </vue-stack>
          </vue-column>
          <vue-column :width="['full', 'full', '5/10']" no-grow>
            <vue-stack space="12" :class="$style.component">
              <vue-stack space="4">
                <vue-text look="h5" weight="black">
                  {{ $t('VuesionPlusSection.autocomplete.title' /* Autocomplete */) }}.
                </vue-text>

                <vue-text>
                  {{
                    $t(
                      'VuesionPlusSection.autocomplete.description' /* Improve your forms with our Autocomplete component, offering both single and multi-select options. Optimized for accessibility (a11y), it provides a smooth and intuitive user experience. Perfect for enhancing user interactions in search and selection tasks. */,
                    )
                  }}
                </vue-text>
              </vue-stack>
              <vue-inline space="8">
                <vue-button
                  look="primary"
                  trailing-icon="tag"
                  as="a"
                  href="https://vuesion.gumroad.com/l/autocomplete"
                  target="_blank"
                >
                  {{ $t('VuesionPlusSection.cta.BuyLicense' /* Buy License */) }}
                </vue-button>
                <vue-button
                  look="ghost"
                  trailing-icon="external-link"
                  as="a"
                  href="https://vuesion.herokuapp.com/storybook/?path=/story/vuesion-autocomplete--default"
                  target="_blank"
                >
                  {{ $t('VuesionPlusSection.cta.Demo' /* Demo */) }}
                </vue-button>
              </vue-inline>
            </vue-stack>
          </vue-column>
        </vue-columns>
      </vue-stack>

      <vue-inline
        stack-phone
        stack-tablet-portrait
        space="0"
        no-wrap
        :class="$style.discount"
        :align-y="['center', 'center', 'start']"
      >
        <svg width="280" height="244" viewBox="0 0 244 241" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_dddd_9812_20104)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M168.963 122.045C168.443 124.125 168.043 126.205 167.763 128.285C167.483 130.405 167.223 132.445 166.983 134.405C166.703 136.405 166.343 138.285 165.903 140.045C165.463 141.804 164.823 143.384 163.983 144.784C163.143 146.184 162.044 147.384 160.684 148.384C159.324 149.344 157.784 150.184 156.065 150.904C154.305 151.584 152.445 152.244 150.485 152.884C148.526 153.484 146.546 154.144 144.546 154.864C142.547 155.584 140.627 156.444 138.787 157.444C136.988 158.444 135.308 159.644 133.748 161.044C132.228 162.484 130.809 164.044 129.489 165.724C128.169 167.444 126.909 169.164 125.709 170.884C124.51 172.644 123.31 174.344 122.11 175.984C120.91 177.584 119.65 179.024 118.331 180.304C117.011 181.544 115.571 182.544 114.011 183.304C112.452 184.064 110.832 184.564 109.152 184.804C107.432 185.044 105.673 185.064 103.873 184.864C102.033 184.664 100.213 184.264 98.4137 183.664C96.574 183.064 94.7743 182.304 93.0146 181.384C91.2549 180.464 89.5551 179.404 87.9154 178.204C86.2757 177.004 84.6759 175.764 83.1162 174.484C81.5164 173.164 79.9567 171.864 78.4369 170.584C76.8772 169.304 75.2974 168.104 73.6977 166.984C72.0979 165.904 70.4382 164.984 68.7185 164.224C67.0387 163.424 65.279 162.864 63.4393 162.544C61.6396 162.224 59.7799 162.024 57.8602 161.944C55.9805 161.904 54.1208 161.884 52.2811 161.884C50.4414 161.924 48.6816 161.884 47.0019 161.764C45.2822 161.644 43.7024 161.364 42.2627 160.924C40.8229 160.444 39.5431 159.744 38.4233 158.824C37.2635 157.864 36.2436 156.724 35.3638 155.404C34.4439 154.044 33.584 152.584 32.7842 151.024C31.9443 149.424 31.1044 147.784 30.2646 146.104C29.4647 144.424 28.5648 142.784 27.565 141.184C26.5651 139.545 25.4653 138.005 24.2655 136.565C23.0657 135.085 21.7859 133.685 20.4261 132.365C19.0663 131.045 17.7066 129.745 16.3468 128.465C14.987 127.185 13.6872 125.905 12.4474 124.625C11.1676 123.305 10.0478 121.945 9.08792 120.545C8.08808 119.145 7.28821 117.665 6.6883 116.105C6.04841 114.545 5.58848 112.925 5.30852 111.245C5.06856 109.565 4.96858 107.845 5.00857 106.085C5.08856 104.365 5.30852 102.625 5.66847 100.865C6.02841 99.1053 6.52833 97.3653 7.16823 95.6454C7.80813 93.9654 8.54801 92.3054 9.38787 90.6655C10.2277 89.0255 11.1076 87.4055 12.0275 85.8056C12.9873 84.2056 13.9072 82.5856 14.787 80.9457C15.6669 79.3057 16.4268 77.6257 17.0667 75.9058C17.7465 74.1458 18.2265 72.3058 18.5064 70.3859C18.8264 68.4659 18.9064 66.4259 18.7464 64.266C18.5864 62.106 18.2865 59.9061 17.8465 57.6661C17.4066 55.3862 16.9467 53.1262 16.4668 50.8862C15.9868 48.6063 15.6069 46.4063 15.3269 44.2864C15.007 42.1664 14.927 40.1665 15.087 38.2865C15.207 36.4465 15.6269 34.7666 16.3468 33.2466C17.1066 31.7666 18.0865 30.4066 19.2863 29.1667C20.5261 27.9267 21.9259 26.7867 23.4856 25.7467C25.0854 24.6668 26.7451 23.6268 28.4648 22.6268C30.2246 21.6268 31.9843 20.5868 33.744 19.5069C35.5037 18.4269 37.2235 17.2869 38.9032 16.0869C40.5429 14.8869 42.1427 13.687 43.7024 12.487C45.3022 11.287 46.8619 10.167 48.3817 9.12706C49.9014 8.08708 51.4412 7.2071 53.001 6.48711C54.5607 5.76713 56.1604 5.30714 57.8002 5.10714C59.4399 4.90714 61.1197 4.98714 62.8394 5.34714C64.5991 5.74713 66.3988 6.34712 68.2385 7.1471C70.0782 7.94709 71.9579 8.82707 73.8776 9.78705C75.7573 10.747 77.677 11.647 79.6367 12.487C81.5564 13.327 83.4961 13.987 85.4558 14.467C87.4155 14.9069 89.3552 15.0869 91.2749 15.0069C93.1946 14.9269 95.1143 14.647 97.034 14.167C98.9137 13.687 100.793 13.107 102.673 12.427C104.553 11.747 106.392 11.067 108.192 10.387C110.032 9.74705 111.852 9.22706 113.651 8.82707C115.451 8.38708 117.211 8.16708 118.93 8.16708C120.69 8.16708 122.39 8.38708 124.03 8.82707C125.669 9.26706 127.229 9.88705 128.709 10.687C130.229 11.487 131.628 12.487 132.908 13.687C134.148 14.847 135.288 16.1669 136.328 17.6469C137.328 19.1269 138.187 20.7468 138.907 22.5068C139.627 24.2668 140.247 26.1067 140.767 28.0267C141.327 29.9467 141.887 31.8866 142.447 33.8466C143.007 35.8065 143.647 37.7065 144.366 39.5465C145.126 41.4264 146.026 43.1864 147.066 44.8264C148.146 46.4663 149.426 47.9663 150.905 49.3263C152.425 50.6463 154.085 51.8662 155.885 52.9862C157.724 54.1462 159.624 55.2262 161.584 56.2261C163.543 57.2661 165.503 58.3261 167.463 59.4061C169.422 60.4461 171.282 61.586 173.042 62.826C174.762 64.066 176.321 65.406 177.721 66.8459C179.121 68.3259 180.341 69.9059 181.381 71.5858C182.38 73.2658 183.18 75.0258 183.78 76.8657C184.38 78.6657 184.76 80.5257 184.92 82.4456C185.08 84.3256 185 86.2056 184.68 88.0855C184.4 90.0055 183.9 91.8854 183.18 93.7254C182.42 95.5654 181.521 97.3853 180.481 99.1853C179.481 100.985 178.401 102.805 177.241 104.645C176.081 106.485 174.962 108.325 173.882 110.165C172.802 112.045 171.822 113.985 170.942 115.985C170.102 117.945 169.442 119.965 168.963 122.045Z"
              fill="url(#paint0_linear_9812_20104)"
            />
          </g>
          <path
            d="M78.3192 64C78.2738 63.4318 78.0607 62.9886 77.68 62.6705C77.305 62.3523 76.734 62.1932 75.967 62.1932C75.4783 62.1932 75.0778 62.2528 74.7653 62.3722C74.4585 62.4858 74.2312 62.642 74.0835 62.8409C73.9357 63.0398 73.859 63.267 73.8533 63.5227C73.842 63.733 73.8789 63.9233 73.9641 64.0938C74.055 64.2585 74.1971 64.4091 74.3903 64.5455C74.5835 64.6761 74.8306 64.7955 75.1317 64.9034C75.4329 65.0114 75.7908 65.108 76.2056 65.1932L77.6374 65.5C78.6033 65.7045 79.43 65.9744 80.1175 66.3097C80.805 66.6449 81.3675 67.0398 81.805 67.4943C82.2425 67.9432 82.5636 68.4489 82.7681 69.0114C82.9783 69.5739 83.0863 70.1875 83.092 70.8523C83.0863 72 82.7994 72.9716 82.2312 73.767C81.663 74.5625 80.8505 75.1676 79.7937 75.5824C78.7425 75.9972 77.4783 76.2045 76.0011 76.2045C74.484 76.2045 73.1602 75.9801 72.0295 75.5312C70.9045 75.0824 70.0295 74.392 69.4045 73.4602C68.7852 72.5227 68.4727 71.3239 68.467 69.8636H72.967C72.9954 70.3977 73.1289 70.8466 73.3675 71.2102C73.6062 71.5739 73.9414 71.8494 74.3732 72.0369C74.8107 72.2244 75.3306 72.3182 75.9329 72.3182C76.4386 72.3182 76.8619 72.2557 77.2028 72.1307C77.5437 72.0057 77.8022 71.8324 77.9783 71.6108C78.1545 71.3892 78.2454 71.1364 78.2511 70.8523C78.2454 70.5852 78.1573 70.3523 77.9869 70.1534C77.8221 69.9489 77.5494 69.767 77.1687 69.608C76.788 69.4432 76.2738 69.2898 75.6261 69.1477L73.8874 68.7727C72.342 68.4375 71.1232 67.8778 70.2312 67.0938C69.3448 66.304 68.9045 65.2273 68.9102 63.8636C68.9045 62.7557 69.1999 61.7869 69.7965 60.9574C70.3988 60.1222 71.2312 59.4716 72.2937 59.0057C73.3619 58.5398 74.5863 58.3068 75.967 58.3068C77.3761 58.3068 78.5948 58.5426 79.6232 59.0142C80.6516 59.4858 81.4442 60.1506 82.0011 61.0085C82.5636 61.8608 82.8477 62.858 82.8533 64H78.3192ZM88.6104 76.2045C87.7752 76.2045 87.0366 76.0682 86.3945 75.7955C85.7582 75.517 85.2582 75.0966 84.8945 74.5341C84.5309 73.9716 84.3491 73.2557 84.3491 72.3864C84.3491 71.6705 84.4712 71.0597 84.7156 70.554C84.9599 70.0426 85.3008 69.625 85.7383 69.3011C86.1758 68.9773 86.6843 68.7301 87.2638 68.5597C87.8491 68.3892 88.4798 68.2784 89.1559 68.2273C89.8888 68.1705 90.4769 68.1023 90.9201 68.0227C91.369 67.9375 91.6928 67.821 91.8917 67.6733C92.0906 67.5199 92.19 67.3182 92.19 67.0682V67.0341C92.19 66.6932 92.0593 66.4318 91.7979 66.25C91.5366 66.0682 91.2013 65.9773 90.7923 65.9773C90.3434 65.9773 89.9769 66.0767 89.6928 66.2756C89.4144 66.4687 89.2468 66.767 89.19 67.1705H84.8604C84.9173 66.375 85.1701 65.642 85.619 64.9716C86.0735 64.2955 86.7354 63.7557 87.6048 63.3523C88.4741 62.9432 89.5593 62.7386 90.8604 62.7386C91.7979 62.7386 92.6388 62.8494 93.3832 63.071C94.1275 63.2869 94.761 63.5909 95.2837 63.983C95.8065 64.3693 96.2042 64.8239 96.4769 65.3466C96.7553 65.8636 96.8945 66.4261 96.8945 67.0341V76H92.4968V74.1591H92.3945C92.1332 74.6477 91.815 75.0426 91.44 75.3438C91.0707 75.6449 90.6474 75.8636 90.1701 76C89.6985 76.1364 89.1786 76.2045 88.6104 76.2045ZM90.1445 73.2386C90.5025 73.2386 90.8377 73.1648 91.1502 73.017C91.4684 72.8693 91.7269 72.6562 91.9258 72.3778C92.1246 72.0994 92.2241 71.7614 92.2241 71.3636V70.2727C92.0991 70.3239 91.9656 70.3722 91.8235 70.4176C91.6871 70.4631 91.5394 70.5057 91.3803 70.5455C91.2269 70.5852 91.0621 70.6222 90.886 70.6562C90.7156 70.6903 90.5366 70.7216 90.3491 70.75C89.9854 70.8068 89.6871 70.9006 89.4542 71.0312C89.2269 71.1562 89.0565 71.3125 88.9428 71.5C88.8349 71.6818 88.7809 71.8864 88.7809 72.1136C88.7809 72.4773 88.9087 72.7557 89.1644 72.9489C89.4201 73.142 89.7468 73.2386 90.1445 73.2386ZM111.867 62.9091L107.469 76H102.015L97.6168 62.9091H102.56L104.674 71.5682H104.81L106.924 62.9091H111.867ZM119.079 76.2386C117.681 76.2386 116.477 75.9716 115.466 75.4375C114.46 74.8977 113.684 74.125 113.139 73.1193C112.599 72.108 112.329 70.8977 112.329 69.4886C112.329 68.1364 112.602 66.9545 113.147 65.9432C113.693 64.9318 114.463 64.1449 115.457 63.5824C116.451 63.0199 117.625 62.7386 118.977 62.7386C119.966 62.7386 120.86 62.892 121.662 63.1989C122.463 63.5057 123.147 63.9517 123.716 64.5369C124.284 65.1165 124.721 65.821 125.028 66.6506C125.335 67.4801 125.488 68.4148 125.488 69.4545V70.5455H113.795V67.9545H121.159C121.153 67.5795 121.056 67.25 120.869 66.9659C120.687 66.6761 120.44 66.4517 120.127 66.2926C119.821 66.1278 119.471 66.0455 119.079 66.0455C118.699 66.0455 118.349 66.1278 118.031 66.2926C117.713 66.4517 117.457 66.6733 117.264 66.9574C117.076 67.2415 116.977 67.5739 116.966 67.9545V70.75C116.966 71.1705 117.054 71.5455 117.23 71.875C117.406 72.2045 117.659 72.4631 117.988 72.6506C118.318 72.8381 118.716 72.9318 119.181 72.9318C119.505 72.9318 119.801 72.8864 120.068 72.7955C120.341 72.7045 120.574 72.5739 120.767 72.4034C120.96 72.2273 121.102 72.017 121.193 71.7727H125.488C125.341 72.6818 124.991 73.4716 124.44 74.142C123.889 74.8068 123.159 75.3239 122.25 75.6932C121.346 76.0568 120.289 76.2386 119.079 76.2386Z"
            fill="#141518"
          />
          <path
            d="M57.9222 116V110.886L67.6893 102.807C68.337 102.27 68.891 101.767 69.3512 101.298C69.82 100.821 70.1779 100.331 70.4251 99.8281C70.6808 99.3253 70.8086 98.767 70.8086 98.1534C70.8086 97.4801 70.6637 96.9048 70.3739 96.4276C70.0927 95.9503 69.7006 95.5838 69.1978 95.3281C68.695 95.0639 68.1154 94.9318 67.4592 94.9318C66.8029 94.9318 66.2234 95.0639 65.7205 95.3281C65.2262 95.5923 64.8427 95.9801 64.57 96.4915C64.2972 97.0028 64.1609 97.625 64.1609 98.358H57.4109C57.4109 96.517 57.8242 94.9318 58.6509 93.6023C59.4776 92.2727 60.6452 91.25 62.1538 90.5341C63.6623 89.8182 65.4308 89.4602 67.4592 89.4602C69.5558 89.4602 71.3711 89.7969 72.9052 90.4702C74.4478 91.1349 75.6367 92.0724 76.4719 93.2827C77.3157 94.4929 77.7376 95.9119 77.7376 97.5398C77.7376 98.5455 77.5288 99.5469 77.1112 100.544C76.6935 101.533 75.9435 102.628 74.8612 103.83C73.7788 105.031 72.2404 106.463 70.2461 108.125L67.7915 110.17V110.324H78.0188V116H57.9222ZM92.5991 116.716C90.2212 116.707 88.1673 116.158 86.4371 115.067C84.707 113.976 83.3732 112.403 82.4357 110.349C81.4982 108.295 81.0337 105.832 81.0423 102.96C81.0508 100.08 81.5195 97.6335 82.4485 95.6222C83.386 93.6108 84.7156 92.081 86.4371 91.0327C88.1673 89.9844 90.2212 89.4602 92.5991 89.4602C94.9769 89.4602 97.0309 89.9886 98.761 91.0455C100.491 92.0937 101.825 93.6236 102.762 95.6349C103.7 97.6463 104.164 100.088 104.156 102.96C104.156 105.849 103.687 108.321 102.75 110.375C101.812 112.429 100.478 114.001 98.7482 115.092C97.0266 116.175 94.9769 116.716 92.5991 116.716ZM92.5991 110.938C93.8263 110.938 94.832 110.298 95.6161 109.02C96.4087 107.733 96.8008 105.713 96.7923 102.96C96.7923 101.162 96.6133 99.6918 96.2553 98.5497C95.8974 97.4077 95.4031 96.5639 94.7724 96.0185C94.1417 95.4645 93.4173 95.1875 92.5991 95.1875C91.3718 95.1875 90.3704 95.8097 89.5948 97.054C88.8192 98.2983 88.4229 100.267 88.4059 102.96C88.3974 104.793 88.5721 106.301 88.93 107.486C89.288 108.662 89.7823 109.531 90.413 110.094C91.0522 110.656 91.7809 110.938 92.5991 110.938ZM122.475 111.091V109.71C122.475 108.602 122.714 107.58 123.191 106.642C123.677 105.705 124.38 104.95 125.301 104.379C126.221 103.808 127.342 103.523 128.663 103.523C130.018 103.523 131.156 103.804 132.076 104.366C133.005 104.929 133.708 105.679 134.186 106.616C134.663 107.554 134.902 108.585 134.902 109.71V111.091C134.902 112.199 134.659 113.222 134.173 114.159C133.696 115.097 132.993 115.851 132.064 116.422C131.135 116.993 130.001 117.278 128.663 117.278C127.325 117.278 126.196 116.993 125.275 116.422C124.355 115.851 123.656 115.097 123.179 114.159C122.71 113.222 122.475 112.199 122.475 111.091ZM126.924 109.71V111.091C126.924 111.577 127.044 112.058 127.282 112.536C127.529 113.004 127.99 113.239 128.663 113.239C129.37 113.239 129.835 113.009 130.056 112.548C130.287 112.088 130.402 111.602 130.402 111.091V109.71C130.402 109.199 130.295 108.705 130.082 108.227C129.869 107.75 129.396 107.511 128.663 107.511C127.99 107.511 127.529 107.75 127.282 108.227C127.044 108.705 126.924 109.199 126.924 109.71ZM108.771 96.108V94.7273C108.771 93.6023 109.014 92.571 109.5 91.6335C109.994 90.696 110.701 89.946 111.622 89.3835C112.542 88.821 113.654 88.5398 114.958 88.5398C116.314 88.5398 117.451 88.821 118.372 89.3835C119.301 89.946 120.004 90.696 120.481 91.6335C120.958 92.571 121.197 93.6023 121.197 94.7273V96.108C121.197 97.233 120.954 98.2599 120.468 99.1889C119.991 100.118 119.288 100.859 118.359 101.413C117.43 101.967 116.297 102.244 114.958 102.244C113.62 102.244 112.491 101.963 111.571 101.401C110.65 100.838 109.951 100.092 109.474 99.1634C109.005 98.2344 108.771 97.2159 108.771 96.108ZM113.271 94.7273V96.108C113.271 96.6193 113.39 97.1051 113.629 97.5653C113.868 98.0256 114.311 98.2557 114.958 98.2557C115.666 98.2557 116.13 98.0256 116.352 97.5653C116.582 97.1051 116.697 96.6193 116.697 96.108V94.7273C116.697 94.2159 116.591 93.7216 116.377 93.2443C116.164 92.767 115.691 92.5284 114.958 92.5284C114.285 92.5284 113.833 92.7756 113.603 93.2699C113.382 93.7557 113.271 94.2415 113.271 94.7273ZM110.944 116L128.944 89.8182H132.575L114.575 116H110.944Z"
            fill="#141518"
          />
          <defs>
            <filter
              id="filter0_dddd_9812_20104"
              x="0"
              y="0"
              width="244"
              height="241"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="2" />
              <feGaussianBlur stdDeviation="3.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9812_20104" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="9" />
              <feGaussianBlur stdDeviation="6.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
              <feBlend mode="normal" in2="effect1_dropShadow_9812_20104" result="effect2_dropShadow_9812_20104" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="21" dy="20" />
              <feGaussianBlur stdDeviation="8.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend mode="normal" in2="effect2_dropShadow_9812_20104" result="effect3_dropShadow_9812_20104" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="38" dy="35" />
              <feGaussianBlur stdDeviation="10.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
              <feBlend mode="normal" in2="effect3_dropShadow_9812_20104" result="effect4_dropShadow_9812_20104" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_9812_20104" result="shape" />
            </filter>
            <linearGradient
              id="paint0_linear_9812_20104"
              x1="5"
              y1="5"
              x2="185"
              y2="156"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FBCB39" />
              <stop offset="1" stop-color="#E4AC04" />
            </linearGradient>
          </defs>
        </svg>

        <vue-stack space="12" :class="$style.component">
          <vue-stack space="4">
            <vue-text look="h5" weight="black">
              {{ $t('VuesionPlusSection.bundle.title' /* Vuesion+ Component Bundle */) }}.
            </vue-text>

            <vue-text>
              {{
                $t(
                  'VuesionPlusSection.bundle.description' /* Unlock the full potential of your projects with the Vuesion+ Component Bundle. Get all our powerful components in one bundle and save 20%. This comprehensive package offers the best value for enhancing your Vue.js applications with advanced, user-friendly features. */,
                )
              }}
            </vue-text>
          </vue-stack>
          <vue-inline space="8">
            <vue-button
              look="primary"
              trailing-icon="tag"
              as="a"
              href="https://vuesion.gumroad.com/l/bundle-commercial"
              target="_blank"
            >
              {{ $t('VuesionPlusSection.cta.BuyCommercialLicense' /* Buy Commercial License */) }}
            </vue-button>
            <vue-button
              look="ghost"
              trailing-icon="tag"
              as="a"
              href="https://vuesion.gumroad.com/l/bundle-personal"
              target="_blank"
            >
              {{ $t('VuesionPlusSection.cta.BuyPersonalLicense' /* Buy Personal License */) }}
            </vue-button>
          </vue-inline>
        </vue-stack>
      </vue-inline>
    </vue-stack>

    <nuxt-img
      :alt="$t('VuesionPlusSection.title')"
      src="/demo/vuesion-plus-components.png"
      preload
      format="webp"
      quality="80"
      loading="lazy"
      :class="[$style.bgImage, 'hidden-p', 'hidden-tp']"
    />
  </vue-content-block>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import VueContentBlock from '~/components/layout/VueContentBlock/VueContentBlock.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.VuesionPlusSection {
  position: relative;
  background-color: var(--surface-default-high);

  .discount {
    max-width: 100%;

    svg {
      width: 180px;
      height: 180px !important;
    }
  }

  .bgImage {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }

  @include mediaMin(tabletLandscape) {
    padding-bottom: 560px;

    .discount {
      max-width: 800px;
    }
  }
}
</style>
