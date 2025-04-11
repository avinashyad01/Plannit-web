"use client"
import React from 'react'
import ChatPartnerPage from '@/app/user/Table/card/page'
import TableDateHistory from '@/app/user/Table/datahistory/page'
import DummyHeadingSection from '@/app/user/Table/dummytable/page'
import LastTablePartners from '@/app/user/Table/lastpartner/page'

const page = () => {
  return (
    <div>
      <ChatPartnerPage />
      <TableDateHistory />
      <DummyHeadingSection />
      <LastTablePartners />
    </div>
  )
}

export default page
