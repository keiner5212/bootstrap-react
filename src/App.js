/** @format */

import postData from "./data/posts.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
	return (
		<>
			<Header></Header>
			<p className="script-font fs-3 text-md-center m-4">
				Travel is the only thing you buy that makes you richer
			</p>
			<hr />
            <Content posts={postData}></Content>

			<Footer></Footer>
		</>
	);
}

export default App;
