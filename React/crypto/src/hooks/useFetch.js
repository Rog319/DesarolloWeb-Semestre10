import { useEffect, useState } from 'react'

export function useFetch () {
  const [cryptos, setCryptos] = useState([])
  useEffect(() => {
    const consultarApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const response = await fetch(url).then((response) => response.json())

      const arrCryptos = response.Data.map((crypto) => {
        const objCrypto = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName
        }
        return objCrypto
      })
      setCryptos(arrCryptos)
    }
    consultarApi()
  }, [])

  return { cryptos }
}
