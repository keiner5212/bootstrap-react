/** @format */

import React from "react";

function Card(props) {
	return (
		<div className="col">
			<div className="card">
				<img
					width="100%"
					height="225"
					alt="loc-img"
					src={props.img}></img>
				<div className="card-body">
					<h5 className="card-title m-0">{props.post.title}</h5>
					<p className="text-muted my-1">{props.post.location}</p>
					<p className="card-text text-truncate">{props.post.content}
					</p>
					<div className="d-flex justify-content-end align-items-center">
						<button
							type="button"
							className="btn btn-sm btn-warning">
							Go to post ➤
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
