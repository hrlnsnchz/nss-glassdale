const eventHub = document.querySelector('.container')



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
      const [prefix, associateId] = clickEvent.target.id.split('--')
      const associateIdEvent = new CustomEvent('associateId', {
        detail: {
          id: parseInt(associateId)
        }
      })
      eventHub.dispatchEvent(associateIdEvent)
    }
  })
