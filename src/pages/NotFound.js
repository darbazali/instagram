import { useEffect } from 'react'

const NotFound = () => {
  useEffect(() => {
    document.title = 'Not found! - Instagram'
  }, [])
  return (
    <div className='bg-gray-background'>
      <div className='mx-auth max-w-screen-lg'>
        <p className='text-center text-2xl text-red-primary'>Not Found</p>
      </div>
    </div>
  )
}

export default NotFound
