import React, { useState, useEffect } from 'react'

function useClientStatus((clinetID) => {
  const [isOnline, setIsOnline] = useState(null)

  useEffect(() => {
    Client.subscribeToClientStatus(
      clinetID, status => setIsOnline(status)
    )
    return () => {
      Client.unsubscribeFromClientStatus(
        clinetID, status => setIsOnline(status)
      )
    }
  })

  return isOnline;
  })


const ClientStatus = ({ clientName, clientID }) => {

  const clientStatus = useClientStatus(clientID)

  const getClientStatusColor = (clientStatus) => {
    clientStatus === 'Online' ? 'Green' : 'Red'
  }

  return(
    <React.Fragment>
      <StatusIcon fill={getClientStatusColor(clientStatus)} />
      {clientName}
    </React.Fragment>
  )
}