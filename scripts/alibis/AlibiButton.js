import { useAlibis } from "./AlibiProvider"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.criminals')



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
      const [prefix, associateId] = clickEvent.target.id.split('--')
      const alibis = useAlibis()
      const associateIdEvent = new CustomEvent('associateId', {
        detail: {
          id: associateId

        }
      })
      eventHub.dispatchEvent(associateIdEvent)
    }
  })
