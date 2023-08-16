import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import Recorder from '../recorder';

// const FlatEditor = dynamic(() => import('../flatEditor'), {
// 	ssr: false,
//   });

export default function AuralCreatePage() {
	// [actcategory] index.js
	// return <h1>Hello World Theoretical</h1>

	// Flat editotr code
	// {/* {/* <FlatEditor score={JSON.parse(flatIOScoreForTransposition)} />
	// 			{/* TODO: if the student has already submitted this, do we show their submission here? if so how would they start over? */}
	// 			<FlatEditor
	// 				edit
	// 				score={{
	// 					scoreId: '62689806be1cd400126c158a',
	// 					sharingKey:
	// 						'fc580b58032c2e32d55543ad748043c3fd7f5cd90d764d3cbf01355c5d79a7acdd5c0944cd2127ef6f0b47138a074477c337da654712e73245ed674ffc944ad8',
	// 				}}
	// 				onSubmit={setJsonWrapper}
	// 				submittingStatus={mutation.status}
	// 				onUpdate={(data) => {
	// 					// console.log('updated composition', data);
	// 					composition = data;
	// 				}}
	// 			/>
	// 			<Recorder
	// 				submit={submitCreativity}
	// 				accompaniment={currentAssignment?.part?.piece?.accompaniment}
	// 			/>
	return (<>
		<p>Instructions</p>
		<Tabs
			defaultActiveKey="One"
			id="theoretical-tabs"
			className="mb-3"
			justify
		>
			<Tab eventKey="One" title="Step 1">
				Motive 1
			</Tab>
			<Tab eventKey="Two" title="Step 2">
				Motive 2
			</Tab>
			<Tab eventKey="Three" title="Step 3">
				Motive 3
			</Tab>
			<Tab eventKey="Four" title="Step 4">
				Motive 4
			</Tab>
			<Tab eventKey="Five" title="Step 5">
				Perform and record 16 Measure melody made up of previous 4 motives
			</Tab>
		</Tabs>
	</>
	);
}