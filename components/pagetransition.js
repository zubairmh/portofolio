import React, { forwardRef, useContext, useState, useEffect  } from 'react'
import { motion,  } from 'framer-motion'
import {useRouter} from "next/router"
import {DirectionContext} from "@/context/directioncontext"
function PageTransition({ children, ...rest } , ref) {
	const router=useRouter()
	const {lastState, setLastState}=useContext(DirectionContext)
	// const [lastState, setLastState]=useState(router.asPath)
	console.log(`Path: ${router.asPath}`)
	console.log(`State: ${lastState}`)

	let onTheRight = { y: '100%', opacity: 1, }
	let onTheLeft = { y: '-100%', opacity: 0, }
	if(router.asPath=="/") {
		onTheRight = { y: '-100%', opacity: 1, }
		onTheLeft = { y: '100%', opacity: 0, }
	}
	if(router.asPath=="/projects" && lastState=="/socials") {
		onTheRight = { y: '-100%', opacity: 1, }
		onTheLeft = { y: '100%', opacity: 0, }
	}
	const inTheCenter = { y: 0 }
	const transition = { duration: 0.6, ease: 'easeInOut' }

	useEffect(()=> {
		if(router.asPath!=lastState) {
			setLastState(router.asPath)
		}

	},[])
	return (
		<motion.div
			ref={ref}
			initial={onTheRight}
			animate={inTheCenter}
			exit={onTheLeft}
			transition={transition}
			{...rest}
		>
			{children}
		</motion.div>
	)
}

export default forwardRef(PageTransition)