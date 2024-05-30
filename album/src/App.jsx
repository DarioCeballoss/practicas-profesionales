import { useState } from 'react'
import Header from './components/views/Header'
import Footer from './components/views/Footer'
import Section from './components/views/Section'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <main>

                <Header />
                <Section />
            </main>

            <Footer />
        </>
    )
}

export default App
