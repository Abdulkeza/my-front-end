import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	decrement,
	increment,
	incrementByAmount,
} from './redux/reducers/counter.js';

function App() {
	// we are distructuring "count" from counter.js as 'initial state' (from "store.js" to ("rootReducer.js" -counter )to counter.js )
	const { count } = useSelector((state) => state.allReducers.counter);
	const dispatch = useDispatch();

	return (
		<>
			<h1>Hi here! This is Keza-codes back</h1>
			<div>
				<div>
					<button type="button" onClick={() => dispatch(increment())}>
						Increment
					</button>
					<h2>
						<span>value: {count}</span>
					</h2>

					<button type="button" onClick={() => dispatch(decrement())}>
						Decrement
					</button>

					<button type="button" onClick={() => dispatch(incrementByAmount(10))}>
						Increment by 10
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
