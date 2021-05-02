import { render, RenderResult } from '@testing-library/vue';
import { createMockClient, MockApolloClient } from 'mock-apollo-client';
import { provide } from '@vue/composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable/dist';
import { GetExamplePageData } from '@/graphql/ExamplePage';
import Apollo from './apollo.vue';

describe('Apollo.vue', () => {
  let harness: RenderResult;
  let mockClient: MockApolloClient;

  beforeEach(() => {
    mockClient = createMockClient();

    mockClient.setRequestHandler(
      GetExamplePageData,
      jest.fn().mockResolvedValue({
        data: {
          characters: {
            results: [
              {
                image: '/image.jpg',
                name: 'Rick Sanchez',
                species: 'species',
                gender: 'gender',
                status: 'status',
              },
            ],
          },
        },
      }),
    );

    harness = render(Apollo, {
      stubs: ['nuxt-link'],
      setup() {
        provide(DefaultApolloClient, mockClient);
      },
    });
  });

  test('renders component with data', () => {
    const { getByText } = harness;

    getByText('Apollo Example');
    getByText('Rick Sanchez');
  });
});
