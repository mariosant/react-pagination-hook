# Pagination Hook for React

> Create paginated content with this easy to use React Hook

[![NPM version](https://img.shields.io/npm/v/@mariosant/react-pagination-hook.svg)](https://www.npmjs.com/package/@mariosant/react-pagination-hook)
[![Build Status](https://travis-ci.org/mariosant/react-pagination-hook.svg?branch=master)](https://travis-ci.org/mariosant/react-pagination-hook)


![gif](https://i.imgur.com/WFz6eg4.gif)

## Installation

Add `@mariosant/react-pagination-hook` to your `package.json`.

```bash
$ npm install @mariosant/react-pagination-hook
```

You can now import the module and use it like

```javascript
import usePagination from '@mariosant/react-pagination-hook';

const Component = ({data}) => {
	const {
		nextPage,
		previousPage,
		paginated,
	} = usePagination(data) // data must be an array

	return (
		<div>
			{paginated.map(record => (
				<div key={record.key}>{record}</div>
			))}
			<button onClick={previousPage}>Previous</button>
			<button onClick={nextPage}>Next</button>
		</div>

	)
```
 You can also try in on CodeSandbox: https://codesandbox.io/s/74089wz7z1

## Usage

WIP

## Development

WIP

## Meta

Marios Antonoudiou – [@marios_ant](https://twitter.com/marios_ant) – mariosant@sent.com

Distributed under the MIT license.

[https://github.com/mariosant/react-pagination-hook](https://github.com/mariosant/react-pagination-hook)

## Contributing

1. Fork it (<https://github.com/mariosant/react-pagination-hook/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes using a semantic commit message.
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
