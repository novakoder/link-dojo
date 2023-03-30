'use client'
import styles from './page.module.css'
import Button from 'react-bootstrap/Button'

export default function Home() {
  return (
    <div className='ps-4 pt-5'>
      <Button variant='primary' href='/admin' className='me-3'>Admin</Button>
      <Button variant='danger' href='/'>Home</Button>
      ADMIN
    </div>
  )
}
