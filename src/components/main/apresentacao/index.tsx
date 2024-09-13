import './index.css'

import quadro1 from '../../../assets/quadros/quadro1.jpeg'
import quadro2 from '../../../assets/quadros/quadro2.jpeg'
import quadro3 from '../../../assets/quadros/quadro3.jpeg'
import quadro4 from '../../../assets/quadros/quadro4.jpeg'
import quadro5 from '../../../assets/quadros/quadro5.jpeg'
import quadro6 from '../../../assets/quadros/quadro6.jpeg'
import quadro7 from '../../../assets/quadros/quadro7.jpeg'
import quadro8 from '../../../assets/quadros/quadro8.jpeg'
import quadro9 from '../../../assets/quadros/quadro9.jpeg'
import quadro10 from '../../../assets/quadros/quadro10.jpeg'
import quadro11 from '../../../assets/quadros/quadro11.jpeg'
import { useEffect, useRef, useState } from 'react'

export default function Apresentacao() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)
  const route = [
    quadro1,
    quadro2,
    quadro3,
    quadro4,
    quadro5,
    quadro6,
    quadro7,
    quadro8,
    quadro9,
    quadro10,
    quadro11,
  ]
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % route.length)
    }, 3000)

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    }
  }, [route.length])
  return (
    <>
      <h1 className="MensagemBemVindo">
        Bem-vindo ao Centro Elétrico Industrial
      </h1>
      <h3 className="Bordao">Atendendo você com a melhor energia!</h3>
      <div className="MontagemQuadro">
        <div className="MontagemDescricao">
          <h3 className="TextLider">Somos líder em montagem de quadros.</h3>
          <span className="Description">
            Fornecemos produtos líderes do setor e um atendimento ao cliente
            abrangente, sempre com um forte compromisso com a sustentabilidade.
            Confie em nossa experiência para soluções de montagem de quadros de
            comando que combinam inovação, qualidade e responsabilidade.
          </span>
        </div>
        <div className="Gallery">
          <div
            className="Gallery-inner"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {route.map((val, index) => (
              <img src={val} key={index} alt={`Image ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
