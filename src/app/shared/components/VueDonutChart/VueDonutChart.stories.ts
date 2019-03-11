import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueDonutChart from './VueDonutChart.vue';

const story = storiesOf('Organisms|DonutChart', module) as any;

story.add(
  'Donut',
  withInfo({})(() => ({
    components: { VueDonutChart },
    data(): any {
      return {
        data: [
          { label: 'Ironman', value: 892 },
          { label: 'Vision', value: 480 },
          { label: 'Hulk', value: 1506 },
          { label: 'Spiderman', value: 795 },
          { label: 'Thor', value: 579 },
          { label: 'Ant-man', value: 230 },
        ],
      };
    },
    template: `
<div style="width:50%">
  <vue-donut-chart title="Who would win?" :data="data" unit="Votes" />
</div>
`,
  })),
);

story.add(
  'Pie',
  withInfo({})(() => ({
    components: { VueDonutChart },
    data(): any {
      return {
        data: [
          { label: 'Ironman', value: 892 },
          { label: 'Vision', value: 480 },
          { label: 'Hulk', value: 1506 },
          { label: 'Spiderman', value: 795 },
          { label: 'Thor', value: 579 },
          { label: 'Ant-man', value: 230 },
        ],
      };
    },
    template: `
<div style="width:50%">
  <vue-donut-chart title="Who would win?" :data="data" unit="Votes" type="pie" />
</div>
`,
  })),
);
