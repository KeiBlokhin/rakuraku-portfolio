import React from "react";
import aws from "../../assets/img/aws.svg";
import graphql from "../../assets/img/graphql.svg";
import javascript from "../../assets/img/javascript.svg";
import mongodb from "../../assets/img/mongodb.svg";
import nextjs from "../../assets/img/next-js.svg";
import nodejs from "../../assets/img/nodejs.svg";
import react from "../../assets/img/react.svg";
import typescript from "../../assets/img/typescript.svg";
import amplify from "../../assets/img/amplify.svg";

export default function GroupBanner() {
	return (
		<section className='py-20'>
			<div className='grid grid-cols-2 md:grid-cols-5 gap-y-7  w-1/2 mx-auto'>
				<div className='text-center'>
					<img className=' w-20' src={aws} alt='' />
				</div>
				<div className='text-center'>
					<img className='w-14' src={amplify} alt='' />
				</div>
				<div className='text-center'>
					<img className='w-14' src={graphql} alt='' />
				</div>
				<div className='text-center'>
					<img className='w-11' src={javascript} alt='' />
				</div>
				<div className='text-center'>
					<img className='w-22' src={mongodb} alt='' />
				</div>
				<div className='md:mx-auto'>
					<img className='w-20' src={nextjs} alt='' />
				</div>
				<div className='md:mx-auto'>
					<img className='w-20' src={nodejs} alt='' />
				</div>
				<div className='md:mx-auto'>
					<img className='w-14' src={react} alt='' />
				</div>
				<div className='md:mx-auto'>
					<img className='w-11' src={typescript} alt='' />
				</div>
			</div>
		</section>
	);
}
