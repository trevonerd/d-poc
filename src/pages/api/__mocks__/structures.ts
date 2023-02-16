const homeStructure = {
  data: {
    structure: {
      key: {
        id: 'default',
        namespace: 'urn:forgegosandbox',
      },
      type: 'template',
      properties: {},
      slots: ['main'],
      items: [
        {
          key: {
            id: 'Promo',
            namespace: 'urn:online-common',
          },
          type: 'module',
          properties: {},
          slot: 'main',
        },
        {
          key: {
            id: 'Section',
            namespace: 'urn:online-common-xrc',
          },
          type: 'layout',
          properties: {
            templates: '4',
            sectionTitle: 'TITLE SECTION',
          },
          slot: 'main',
          slots: ['item'],
          items: [
            {
              key: {
                id: 'Brightcove',
                namespace: 'urn:online-common',
              },
              type: 'module',
              properties: {},
              slot: 'item',
            },
            {
              key: {
                id: 'Adv',
                namespace: 'urn:online-common',
              },
              type: 'module',
              properties: {},
              slot: 'item',
            },
          ],
        },
      ],
    },
    variables: [
      {
        type: 'keyValue',
        key: 'ishomepage',
        keyValue: {
          value: 'True',
          valueType: 'boolean',
        },
      },
      {
        type: 'keyValue',
        key: 'testali',
        keyValue: {
          value: 'helloworld',
          valueType: 'string',
        },
      },
    ],
  },
  meta: {
    version: '1.0',
  },
};

const aboutStructure = {
  data: {
    structure: {
      key: {
        id: 'default',
        namespace: 'urn:forgegosandbox',
      },
      type: 'template',
      properties: {},
      slots: ['main'],
      items: [
        {
          key: {
            id: 'Promo',
            namespace: 'urn:online-common',
          },
          type: 'module',
          properties: {},
          slot: 'main',
        },
        {
          key: {
            id: 'Section',
            namespace: 'urn:online-common-xrc',
          },
          type: 'layout',
          properties: {
            templates: '4',
            sectionTitle: 'Work with us',
          },
          slot: 'main',
          slots: ['item'],
          items: [
            {
              key: {
                id: 'GoogleMap',
                namespace: 'urn:online-common',
              },
              type: 'module',
              properties: {},
              slot: 'item',
            },
            {
              key: {
                id: 'Adv',
                namespace: 'urn:online-common',
              },
              type: 'module',
              properties: {},
              slot: 'item',
            },
          ],
        },
      ],
    },
    variables: [
      {
        type: 'keyValue',
        key: 'ishomepage',
        keyValue: {
          value: 'False',
          valueType: 'boolean',
        },
      }
    ],
  },
  meta: {
    version: '1.0',
  },
};

export { aboutStructure, homeStructure };
