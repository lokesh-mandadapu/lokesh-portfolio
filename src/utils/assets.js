import { useEffect, useMemo, useState } from 'react'

export function projectAssetCandidates(slug) {
  return ['01.png', '02.png', '03.png'].map((fileName) => `/assets/projects/${slug}/${fileName}`)
}

export function certificateAssetPath(id) {
  return `/assets/certificates/${id}.png`
}

export function useAvailableAssets(paths) {
  const key = paths.join('|')
  const assetPaths = useMemo(() => (key ? key.split('|') : []), [key])
  const [available, setAvailable] = useState([])

  useEffect(() => {
    let cancelled = false

    async function resolveAssets() {
      const results = await Promise.all(
        assetPaths.map(async (path) => {
          try {
            const response = await fetch(path)
            const contentType = response.headers.get('content-type') || ''
            return response.ok && contentType.startsWith('image/') ? path : null
          } catch {
            return null
          }
        })
      )

      if (!cancelled) {
        setAvailable(results.filter(Boolean))
      }
    }

    resolveAssets()

    return () => {
      cancelled = true
    }
  }, [assetPaths])

  return available
}
