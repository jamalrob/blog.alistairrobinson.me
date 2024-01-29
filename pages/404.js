import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Custom404() {
  let router = useRouter();
  useEffect(() => {
      if(router.asPath == '/adventure-of-hans-pfaall-edgar-allan-poe') {
        router.push('/unparalleled-adventure-of-hans-pfaall-edgar-allan-poe')
      }
  })
}