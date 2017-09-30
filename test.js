/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, flowtype/require-variable-type, no-magic-numbers */
import {test} from "tap"
import xstream from "xstream"
import streamSatisfies from "@unction/streamsatisfies"

import selectValues from "./index"

const isOdd = (value) => value % 2 !== 0

test(({same, end}) => {
  same(
    selectValues(isOdd)([
      1,
      2,
      3,
      4,
    ]),
    [
      1,
      3,
    ]
  )

  end()
})

test(({same, end}) => {
  same(
    selectValues(isOdd)({
      aaa: 1,
      bbb: 2,
      ccc: 3,
      ddd: 4,
    }),
    {
      aaa: 1,
      ccc: 3,
    }
  )

  end()
})

test(({same, end}) => {
  same(
    selectValues(isOdd)(new Set([
      1,
      2,
      3,
      4,
    ])),
    new Set([
      1,
      3,
    ])
  )

  end()
})

test(({same, end}) => {
  same(
    selectValues(isOdd)(new Map([
      [
        "a",
        1,
      ],
      [
        "b",
        2,
      ],
      [
        "c",
        3,
      ],
      [
        "d",
        4,
      ],
    ])),
    new Map([
      [
        "a",
        1,
      ],
      [
        "c",
        3,
      ],
    ])
  )

  end()
})

test(({equal, end}) => {
  streamSatisfies(
    "1--3--|"
  )(
    (given) => (expected) => equal(given, expected)
  )(
    () => () => end()
  )(
    selectValues(isOdd)(xstream.fromArray([
      1,
      2,
      3,
      4,
    ]))
  )
})
