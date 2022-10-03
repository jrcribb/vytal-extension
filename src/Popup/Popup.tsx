import React, { useState } from 'react'
import { ThemeProvider, Flex, Box, Text } from 'theme-ui'
import { theme } from '../theme'
import {
  MapPin,
  Home,
  MessageSquare,
  Globe,
  Sliders,
  Settings,
  ExternalLink,
} from 'react-feather'
import TabItem from './TabItem'
import LocationPage from './Pages/LocationPage'
import UserAgentPage from './Pages/UserAgentPage'
import SettingsPage from './Pages/SettingsPage'
import AddressAutofillPage from './Pages/AddressAutofillPage'
import WebRtcPage from './Pages/WebRtcPage'

const Popup = () => {
  const [tab, setTab] = useState('webRtc')

  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          width: '350px',
          height: '390px',
        }}
      >
        <Flex
          sx={{
            minWidth: '36px',
            backgroundColor: 'primary',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <TabItem
            Icon={MapPin}
            active={tab === 'location'}
            onClick={() => setTab('location')}
          />
          <TabItem
            Icon={Home}
            active={tab === 'addressAutofill'}
            onClick={() => setTab('addressAutofill')}
          />
          <TabItem
            Icon={MessageSquare}
            active={tab === 'webRtc'}
            onClick={() => setTab('webRtc')}
          />
          <TabItem
            Icon={Sliders}
            active={tab === 'useragent'}
            onClick={() => setTab('useragent')}
          />
          <TabItem
            Icon={Settings}
            active={tab === 'settings'}
            onClick={() => setTab('settings')}
          />
          <TabItem
            Icon={ExternalLink}
            onClick={() => window.open('https://vytal.io')}
          />
        </Flex>
        <Box sx={{ m: '12px', width: '100%' }}>
          <LocationPage tab={tab} />
          <AddressAutofillPage tab={tab} />
          <WebRtcPage tab={tab} />
          <UserAgentPage tab={tab} />
          <SettingsPage tab={tab} />
          {/* <Text
            sx={{
              mb: '8px',
              fontSize: '10px',
              position: 'fixed',
              bottom: '0',
            }}
          >
            Current tab won't be fully spoofed until after 1st or 2nd reload.
          </Text> */}
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

export default Popup
