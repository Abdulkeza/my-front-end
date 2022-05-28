import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.css';
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
			<h1 className="text-xl font-medium text-black-500">
				{' '}
				Hi here! This is Keza-codes{' '}
			</h1>
			<div className="p-0">
				<div className="p-6 bg-slate-400">
					<button
						className="rounded-full  bg-primary p-2 text-white"
						type="button"
						onClick={() => dispatch(increment())}
					>
						Increment
					</button>
					<h4>
						<span>value: {count}</span>
					</h4>
					<button
						className="rounded-md bg-primary p-2"
						type="button"
						onClick={() => dispatch(decrement())}
					>
						Decrement
					</button>
					<button
						className="rounded-md p-2 bg-delete ml-4"
						type="button"
						onClick={() => dispatch(incrementByAmount(10))}
					>
						Increment by 10
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
