import React from 'react'
import { useGetConversations } from './lib/view-conversations';

const ViewConversations = () => {
  const {data, loading, error} = useGetConversations();
  if(loading) return <div>Loading...</div>
  if(error) return <div>Error</div>
  if(!data) return <div>No data</div>

  return (
    <div>ViewConversations</div>
  )
}

export default ViewConversations;