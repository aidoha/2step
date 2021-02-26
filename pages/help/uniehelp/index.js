import React from 'react'
import MainLayout from '../../../components/MainLayout'
import Head from '../../../components/head'
import withData from '../../../lib/apollo'
import UnieHelpPage from '../../../components/UnieHelp'

class UnieHelp extends React.Component {
  render() {
    return (
      <MainLayout section={5} bg="#282F36" noFooter>
        <Head title="Unie помощник | 2step.me" />
        <UnieHelpPage />
      </MainLayout>
    )
  }
}

export default withData(UnieHelp)
