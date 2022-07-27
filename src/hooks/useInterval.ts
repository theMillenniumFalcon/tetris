import { useEffect, useRef } from 'react'

export const useInterval = ({callback, delay}: any) => {
    const savedCallback = useRef()

    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        const tick = () => {
            savedCallback.current()
        }

        if (delay !== null) {
            let id = setTimeout(tick, delay)
            return () => clearTimeout(id)
        }
    }, [delay])
}