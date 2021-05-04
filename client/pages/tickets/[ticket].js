// Next and Reacr imports
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Libraries imports
import axios from 'axios'

// Local components imports
import Nav from '../../components/navbar'

const Ticket = ({ ticket }) => {
  return (
    <div className="ticketContainer">
      <Head> <title>Lotería Nacional | Ticket</title> </Head>
      <Nav />
      <p>{ticket.title}</p>
    </div>
  )
}

export async function getStaticPaths() {

  return {
    paths: [
      {
        params: { id: "1" }
      },
      {
        params: { id: "2" }
      }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3001/ticket/${params.id}`)
  const ticket = await res.json()

  return {
    props: {
      ticket
    }
  }
}

export default Ticket