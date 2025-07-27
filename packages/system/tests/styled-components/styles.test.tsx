import * as React from 'react'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import isPropValid from '@emotion/is-prop-valid'
import { render, cleanup } from '@testing-library/react'
import styled from 'styled-components'
import * as styles from '../../src'

afterEach(cleanup)

describe('styles', () => {
  describe.each([
    [
      'fontFamily',
      {
        styleRule: 'font-family',
        theme: {
          fonts: {
            primary: 'serif',
            secondary: 'sans-serif',
          },
        },
        expectations: [
          ['arial', 'arial'],
          ['primary', 'serif'],
        ],
      },
    ],
    [
      'fontSize',
      {
        styleRule: 'font-size',
        theme: {
          fontSizes: [10, 15, 40],
        },
        expectations: [
          [0, '10px'],
          [1, '15px'],
          [20, '20px'],
          ['3em', '3em'],
          ['16rpx', '1rem'],
        ],
      },
    ],
    [
      'lineHeight',
      {
        styleRule: 'line-height',
        theme: {
          lineHeights: [1.2, 1.5, 2],
        },
        expectations: [
          [0, 1.2],
          [1, 1.5],
          [3, 3],
          ['3em', '3em'],
          ['16rpx', '1rem'],
        ],
      },
    ],
    [
      'fontWeight',
      {
        styleRule: 'font-weight',
        theme: {
          fontWeights: [400, 500, 800],
        },
        expectations: [
          [0, 400],
          [1, 500],
          [800, 800],
          ['medium', 'medium'],
        ],
      },
    ],
    [
      'fontStyle',
      {
        styleRule: 'font-style',
        expectations: [
          ['normal', 'normal'],
          ['italic', 'italic'],
        ],
      },
    ],
    [
      'textAlign',
      {
        styleRule: 'text-align',
        expectations: [
          ['center', 'center'],
          ['justify', 'justify'],
        ],
      },
    ],
    [
      'letterSpacing',
      {
        styleRule: 'letter-spacing',
        theme: {
          letterSpacings: [1.2, 2],
        },
        expectations: [
          [0, '1.2px'],
          [1, '2px'],
          [1.1, '1.1px'],
          ['2rem', '2rem'],
          ['16rpx', '1rem'],
        ],
      },
    ],
    [
      'color',
      {
        styleRule: 'color',
        theme: {
          colors: {
            primary: 'red',
          },
        },
        expectations: [
          ['primary', 'red'],
          ['#fff', '#fff'],
          ['rgba(0,0,0,0)', 'rgba(0,0,0,0)'],
        ],
      },
    ],
    [
      'w',
      {
        utility: 'width',
        styleRule: 'width',
        theme: {
          sizes: {
            large: 400,
          },
        },
        expectations: [
          [0.5, '50%'],
          ['large', '400px'],
          [50, '50px'],
          ['16rpx', '1rem'],
        ],
      },
    ],
    [
      'h',
      {
        utility: 'height',
        styleRule: 'height',
        theme: {
          sizes: {
            large: 400,
          },
        },
        expectations: [
          [0.5, '50%'],
          ['large', '400px'],
          [50, '50px'],
          ['16rpx', '1rem'],
        ],
      },
    ],
    [
      'maxWidth',
      {
        styleRule: 'max-width',
        theme: {
          sizes: {
            large: 400,
          },
        },
        expectations: [
          [0.5, '50%'],
          ['large', '400px'],
          [50, '50px'],
          ['16rpx', '1rem'],
        ],
      },
    ],
    [
      'maxHeight',
      {
        styleRule: 'max-height',
        theme: {
          sizes: {
            large: 400,
          },
        },
        expectations: [
          [0.5, '50%'],
          ['large', '400px'],
          [50, '50px'],
          ['16rpx', '1rem'],
        ],
      },
    ],
    [
      'minWidth',
      {
        styleRule: 'min-width',
        theme: {
          sizes: {
            large: 400,
          },
        },
        expectations: [
          [0.5, '50%'],
          ['large', '400px'],
          [50, '50px'],
          ['16rpx', '1rem'],
        ],
      },
    ],
    [
      'minHeight',
      {
        styleRule: 'min-height',
        theme: {
          sizes: {
            large: 400,
          },
        },
        expectations: [
          [0.5, '50%'],
          ['large', '400px'],
          [50, '50px'],
          ['16rpx', '1rem'],
        ],
      },
    ],
    [
      'display',
      {
        styleRule: 'display',
        expectations: [
          ['flex', 'flex'],
          ['block', 'block'],
        ],
      },
    ],
    [
      'verticalAlign',
      {
        styleRule: 'vertical-align',
        expectations: [
          ['middle', 'middle'],
          ['50%', '50%'],
        ],
      },
    ],
    [
      'alignItems',
      {
        styleRule: 'align-items',
        expectations: [
          ['flex-start', 'flex-start'],
          ['center', 'center'],
        ],
      },
    ],
    [
      'alignContent',
      {
        styleRule: 'align-content',
        expectations: [
          ['flex-start', 'flex-start'],
          ['center', 'center'],
        ],
      },
    ],
    [
      'justifyContent',
      {
        styleRule: 'justify-content',
        expectations: [
          ['flex-start', 'flex-start'],
          ['center', 'center'],
        ],
      },
    ],
    [
      'justifyItems',
      {
        styleRule: 'justify-items',
        expectations: [
          ['flex-start', 'flex-start'],
          ['center', 'center'],
        ],
      },
    ],
    [
      'flexWrap',
      {
        styleRule: 'flex-wrap',
        expectations: [
          ['wrap', 'wrap'],
          ['nowrap', 'nowrap'],
        ],
      },
    ],
    [
      'flexBasis',
      {
        styleRule: 'flex-basis',
        expectations: [
          [0.5, '50%'],
          [50, '50px'],
          ['16rpx', '1rem'],
        ],
      },
    ],
    [
      'flexDirection',
      {
        styleRule: 'flex-direction',
        expectations: [
          ['row', 'row'],
          ['column', 'column'],
        ],
      },
    ],
    [
      'flex',
      {
        styleRule: 'flex',
        expectations: [
          [1, '1'],
          ['1 0 auto', '1 0 auto'],
        ],
      },
    ],
    [
      'justifySelf',
      {
        styleRule: 'justify-self',
        expectations: [
          ['flex-start', 'flex-start'],
          ['center', 'center'],
        ],
      },
    ],
    [
      'alignSelf',
      {
        styleRule: 'align-self',
        expectations: [
          ['flex-start', 'flex-start'],
          ['center', 'center'],
        ],
      },
    ],
    [
      'order',
      {
        styleRule: 'order',
        expectations: [
          [1, '1'],
          [10, '10'],
        ],
      },
    ],
    [
      'background',
      {
        styleRule: 'background',
        expectations: [
          ['red', 'red'],
          ['blue', 'blue'],
        ],
      },
    ],
    [
      'backgroundColor',
      {
        theme: {
          colors: {
            primary: 'red',
          },
        },
        styleRule: 'background-color',
        expectations: [
          ['primary', 'red'],
          ['blue', 'blue'],
        ],
      },
    ],
    [
      'bg',
      {
        utility: 'backgroundColor',
        theme: {
          colors: {
            primary: 'red',
          },
        },
        styleRule: 'background-color',
        expectations: [
          ['primary', 'red'],
          ['blue', 'blue'],
        ],
      },
    ],
    [
      'backgroundImage',
      {
        styleRule: 'background-image',
        expectations: [['url(x.gif)', 'url(x.gif)']],
      },
    ],
    [
      'backgroundSize',
      {
        styleRule: 'background-size',
        expectations: [
          ['cover', 'cover'],
          ['50%', '50%'],
        ],
      },
    ],
    [
      'backgroundRepeat',
      {
        styleRule: 'background-repeat',
        expectations: [
          ['no-repeat', 'no-repeat'],
          ['repeat-y', 'repeat-y'],
        ],
      },
    ],
    [
      'position',
      {
        styleRule: 'position',
        expectations: [
          ['absolute', 'absolute'],
          ['relative', 'relative'],
        ],
      },
    ],
    [
      'zIndex',
      {
        theme: {
          zIndices: {
            alert: 100,
          },
        },
        styleRule: 'z-index',
        expectations: [
          ['alert', '100'],
          [20, '20'],
        ],
      },
    ],
    [
      'top',
      {
        styleRule: 'top',
        expectations: [
          ['10', '10px'],
          [10, '10px'],
          [-10, '-10px'],
          ['16rpx', '1rem'],
          ['10px', '10px'],
          ['4%', '4%'],
          ['16rpx', '1rem'],
          ['-16rpx', '-1rem'],
        ],
      },
    ],
    [
      'right',
      {
        styleRule: 'right',
        expectations: [
          ['10', '10px'],
          [10, '10px'],
          [-10, '-10px'],
          ['16rpx', '1rem'],
          ['10px', '10px'],
          ['4%', '4%'],
          ['16rpx', '1rem'],
          ['-16rpx', '-1rem'],
        ],
      },
    ],
    [
      'bottom',
      {
        styleRule: 'bottom',
        expectations: [
          ['10', '10px'],
          [10, '10px'],
          [-10, '-10px'],
          ['16rpx', '1rem'],
          ['10px', '10px'],
          ['4%', '4%'],
          ['16rpx', '1rem'],
          ['-16rpx', '-1rem'],
        ],
      },
    ],
    [
      'left',
      {
        styleRule: 'left',
        expectations: [
          ['10', '10px'],
          [10, '10px'],
          [-10, '-10px'],
          ['16rpx', '1rem'],
          ['10px', '10px'],
          ['4%', '4%'],
          ['16rpx', '1rem'],
          ['-16rpx', '-1rem'],
        ],
      },
    ],
    [
      'border',
      {
        styleRule: 'border',
        expectations: [
          [1, '1px solid'],
          ['1px solid red', '1px solid red'],
        ],
      },
    ],
    [
      'borderWidth',
      {
        styleRule: 'border-width',
        expectations: [
          [1, '1px'],
          ['20%', '20%'],
          ['16rpx', '1rem'],
        ],
      },
    ],
    [
      'borderStyle',
      {
        styleRule: 'border-style',
        expectations: [
          ['solid', 'solid'],
          ['dashed', 'dashed'],
        ],
      },
    ],
    [
      'borderColor',
      {
        theme: {
          colors: {
            primary: 'red',
          },
        },
        styleRule: 'border-color',
        expectations: [
          ['primary', 'red'],
          ['blue', 'blue'],
        ],
      },
    ],
    [
      'borderRadius',
      {
        theme: {
          radii: {
            round: '50%',
          },
        },
        styleRule: 'border-radius',
        expectations: [
          ['round', '50%'],
          [10, '10px'],
          ['16rpx', '1rem'],
        ],
      },
    ],
    [
      'boxShadow',
      {
        theme: {
          shadows: {
            red: '10px 5px 5px red',
          },
        },
        styleRule: 'box-shadow',
        expectations: [
          ['red', 'var(--x-ring-shadow, 0 0 #0000),var(--x-shadow)'],
          [
            '12px 12px 2px 1px rgba(0, 0, 255, .2)',
            'var(--x-ring-shadow, 0 0 #0000),var(--x-shadow)',
          ],
        ],
      },
    ],
    [
      'opacity',
      {
        styleRule: 'opacity',
        expectations: [
          [1, '1'],
          [0.2, '0.2'],
        ],
      },
    ],
    [
      'transition',
      {
        styleRule: 'transition',
        theme: {
          transitions: {
            color: 'color 500ms',
          },
        },
        expectations: [
          ['all 300ms', 'all 300ms'],
          ['color', 'color 500ms'],
        ],
      },
    ],
  ])('#%s', (name, config) => {
    const Dummy = styled.div.withConfig({ shouldForwardProp: isPropValid })`
      ${styles[(config as any).utility || name]};
    `

    describe.each(config.expectations)(
      'accepts "%s" and returns "%s"',
      (value, expected) => {
        it('supports simple value', () => {
          const props = { [name]: value }
          const { container } = render(
            <Dummy theme={(config as any).theme} {...props} />,
          )
          const styleRules = Array.isArray(config.styleRule)
            ? config.styleRule
            : [config.styleRule]
          styleRules.forEach((styleRule) => {
            expect(container.firstChild).toHaveStyle(
              `${styleRule}: ${expected};`,
            )
          })
        })

        // Currently not testable with toHaveStyle matcher
        xit('supports breakpoints value', () => {
          const props = { [name]: { md: value } }
          const { container } = render(
            <Dummy theme={(config as any).theme} {...props} />,
          )
          const styleRules = Array.isArray(config.styleRule)
            ? config.styleRule
            : [config.styleRule]

          styleRules.forEach((styleRule) => {
            expect(container.firstChild).toHaveStyle(
              `${styleRule}: ${expected};`,
              // @ts-ignore
              {
                media: '(min-width:768px)',
              },
            )
          })
        })
      },
    )
  })
})
