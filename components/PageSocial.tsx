import type * as React from 'react'
import { useEffect, useState } from 'react'
import cs from 'classnames'

import * as config from '@/lib/config'

import styles from './PageSocial.module.css'

export function PageSocial() {
  const [mounted, setMounted] = useState(false)

  // Evita o erro de Hydration (#418) renderizando após a montagem do componente
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={styles.pageSocial}>
      {/* Currículo Lattes */}
      <a
        className={cs(styles.action, styles.lattes)}
        href="http://lattes.cnpq.br/1583821044060752"
        key="lattes"
        title="Currículo Lattes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.actionBg}>
          <div className={styles.actionBgPane} />
        </div>
        <div className={styles.actionBg} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4l7 3.82 7-3.82v-4L12 17l-7-3.82z" />
          </svg>
        </div>
      </a>

      {/* ResearchGate */}
      <a
        className={cs(styles.action, styles.researchgate)}
        href="https://www.researchgate.net/profile/Joao-Vitor-Nunes?ev=hdr_xprf"
        key="researchgate"
        title="ResearchGate"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.actionBg}>
          <div className={styles.actionBgPane} />
        </div>
        <div className={styles.actionBg} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M19.54 6.74c-.42 0-.82.12-1.15.34l-3.26-1.9a2.53 2.53 0 0 0-2.61-2.62c-1.4 0-2.54 1.14-2.54 2.54 0 .34.07.66.2.96L7.33 8.28a2.53 2.53 0 0 0-2.27-1.41c-1.4 0-2.54 1.14-2.54 2.54s1.14 2.54 2.54 2.54c.94 0 1.76-.52 2.19-1.29l2.88 1.68c-.05.18-.08.37-.08.56 0 1.4 1.14 2.54 2.54 2.54s2.54-1.14 2.54-2.54c0-.36-.08-.71-.22-1.01l3.18-1.85c.35.26.78.42 1.25.42 1.14 0 2.07-.93 2.07-2.07s-.93-2.07-2.07-2.07z"/>
          </svg>
        </div>
      </a>

      {/* LinkedIn */}
      {config.linkedin && (
        <a
          className={cs(styles.action, styles.linkedin)}
          href={`https://www.linkedin.com/in/${config.linkedin}`}
          key="linkedin"
          title={`LinkedIn ${config.author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.actionBg}>
            <div className={styles.actionBgPane} />
          </div>
          <div className={styles.actionBg}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
            </svg>
          </div>
        </a>
      )}
    </div>
  )
}
