/** @format */

import SearchBar from "./SearchBar";
import { React, useState } from "react";
import images from "../images/index.js";
import SideTable from "./SideTable";
import Card from "./Card";

function Content(props) {
	let [Search, setSearch] = useState("");
	return (
		<main className="container">
			<SearchBar Search={Search} setSearch={setSearch}></SearchBar>
			<div className="row">
				<div className="col-xs-12 col-sm-8">
					<div className="row row-cols-1 row-cols-lg-2 g-3">
						{props.posts.map((post) => {
							if (Search !== "") {
								if (
									post.location
										.toLowerCase()
										.includes(Search.toLowerCase())
								) {
									return (
										<Card
											post={post}
											img={
												images[
													post.location
														.toLowerCase()
														.replace(" ", "-")
												]
											}></Card>
									);
								}else{
									return <></>
								}
							}
							return (
								<Card
									post={post}
									img={
										images[
											post.location
												.toLowerCase()
												.replace(" ", "-")
										]
									}></Card>
							);
						})}
					</div>
				</div>
				<div className="col-xs-12 col-sm-4">
					<p className="fs-3 fw-bold">
						Posts by <span className="text-warning">location</span>
					</p>
					<SideTable posts={props.posts}></SideTable>
				</div>
			</div>
		</main>
	);
}

export default Content;
