

function Home() {
  return (
    <>
      <div className='text-6xl'>Welcome</div>
      {process.env.REACT_APP_GITHUB_TOKEN}
    </>
  )
}

export default Home