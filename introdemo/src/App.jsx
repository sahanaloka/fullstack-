const App = () => {
  const now = new Date()
  const month =now.getMonth()
  const a = 11
  const b = 12
  console.log(now, a+b)

  return (
    <div>
      <p>Hello</p>
      <p>Hello world, it is {now.toString()}</p>
      <Hello/>
        {a} plus {b} is {a + b}
      
    </div>
  )
}
const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}


export default App