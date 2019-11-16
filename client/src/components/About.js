import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import enjoy from '../img/greetings.png'

const useStyles = makeStyles(theme => ({
  descOne: {
    fontSize: '130px',
    width: '100%',
    color: '#fff',
    textShadow: '5px 5px 1px black',
    position: 'absolute',
    bottom: '250px',
    left: '50%',
    zIndex: 1,
    transform: 'translateX(-50%)',
    textAlign: 'center'
  },
  people: {
    top: '54px',
    left: '337px',
    width: '26%',
    zIndex: 2,
    position: 'absolute'
  },
  container: {
    position: 'absolute',
    bottom: '10px',
    left: 0,
    width: '100%'
  },
  item: {
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: '200px',
    boxShadow: 'inset 5px 5px 10px black'
  },
  svgItem: {
    transform: 'scale(0.7)  translateY(90px)'
  },
  descTxt: {
    fontSize: '50px',
    color: theme.palette.secondary.main,
    textShadow: '5px 5px 1px black'
  }
}))

export default () => {
  const classes = useStyles()
  return (
    <>
      <h1 className={classes.descOne}>WE MAKE PEOPLE HAPPY</h1>
      <img src={enjoy} alt="Happy people" className={classes.people} />

      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} justify="space-around">
            <Grid
              item
              xs={3}
              className={classes.item}
              direction="column"
              justify="space-around"
            >
              <svg
                width="181"
                height="181"
                viewBox="0 0 181 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={classes.svgItem}
              >
                <path
                  d="M172.714 166.706L102.003 95.9952C100.346 94.3379 97.6596 94.3379 96.0027 95.9952C94.3454 97.6525 94.3454 100.338 96.0027 101.995L166.713 172.706C168.477 174.471 171.464 174.302 173.025 172.359C174.363 170.693 174.224 168.215 172.714 166.706Z"
                  fill="#D9DDE2"
                />
                <path
                  d="M177.714 161.705L146.601 130.592C142.189 126.182 135.012 126.182 130.6 130.592C126.19 135.003 126.19 142.181 130.6 146.592L161.714 177.705C165.28 181.272 170.967 182.044 175.345 179.523C179.904 176.898 182.098 171.118 180.441 166.126C179.891 164.469 178.948 162.94 177.714 161.705Z"
                  fill="#3CBDE8"
                />
                <path
                  d="M167.365 172.068L136.252 140.956C132.831 137.534 132.065 132.449 133.951 128.281C132.736 128.827 131.597 129.596 130.6 130.593C126.189 135.004 126.189 142.182 130.6 146.593L161.713 177.706C165.28 181.272 170.967 182.044 175.344 179.524C177.42 178.329 178.997 176.507 179.952 174.408C175.746 176.263 170.655 175.358 167.365 172.068Z"
                  fill="#2C9DD4"
                />
                <path
                  d="M59.4048 0C26.653 0 0.00787354 26.6451 0.00787354 59.3969C0.00787354 92.1486 26.653 118.794 59.4048 118.794C92.1565 118.794 118.802 92.1486 118.802 59.3969C118.802 26.6451 92.1565 0 59.4048 0Z"
                  fill="#69788D"
                />
                <path
                  d="M59.405 8.48541C31.332 8.48541 8.49316 31.3242 8.49316 59.3972C8.49316 87.4702 31.332 110.309 59.405 110.309C87.478 110.309 110.317 87.4698 110.317 59.3969C110.317 31.3239 87.478 8.48541 59.405 8.48541Z"
                  fill="#56677E"
                />
                <path
                  d="M59.405 13.3102C33.9926 13.3102 13.3183 33.9844 13.3183 59.3969C13.3183 84.8093 33.9926 105.484 59.405 105.484C84.817 105.484 105.492 84.8093 105.492 59.3969C105.492 33.9844 84.8174 13.3102 59.405 13.3102Z"
                  fill="#C7CCD4"
                />
                <path
                  d="M59.405 19.799C37.5705 19.799 19.8071 37.5624 19.8071 59.3969C19.8071 81.2314 37.5705 98.9948 59.405 98.9948C81.2395 98.9948 99.0029 81.2314 99.0029 59.3969C99.0029 37.5624 81.2395 19.799 59.405 19.799Z"
                  fill="#ECEEF1"
                />
                <path
                  d="M82.0324 45.2549H62.2335V39.5979C62.2335 38.0361 60.9672 36.7695 59.405 36.7695H36.7776C35.2157 36.7695 33.9491 38.0358 33.9491 39.5979V79.1959C33.9491 80.7577 35.2154 82.0243 36.7776 82.0243H82.0324C83.5943 82.0243 84.8609 80.758 84.8609 79.1959V48.083C84.8609 46.5212 83.5946 45.2549 82.0324 45.2549Z"
                  fill="#FFDB66"
                />
                <path
                  d="M39.606 76.3677V36.7695H36.7776C35.2157 36.7695 33.9491 38.0358 33.9491 39.5979V79.1959C33.9491 80.7577 35.2154 82.0243 36.7776 82.0243H82.0324C83.5943 82.0243 84.8609 80.758 84.8609 79.1959V76.3674H39.606V76.3677Z"
                  fill="#F7C14D"
                />
                <path
                  d="M59.7585 65.0538H59.405C57.8432 65.0538 56.5765 63.7875 56.5765 62.2253C56.5765 60.6635 57.8428 59.3969 59.405 59.3969H59.7585C61.3204 59.3969 62.587 60.6631 62.587 62.2253C62.587 63.7875 61.3211 65.0538 59.7585 65.0538Z"
                  fill="#F09B24"
                />
                <path
                  d="M71.0724 65.0538H70.7189C69.1571 65.0538 67.8904 63.7875 67.8904 62.2253C67.8904 60.6635 69.1567 59.3969 70.7189 59.3969H71.0724C72.6343 59.3969 73.9009 60.6631 73.9009 62.2253C73.9009 63.7875 72.6346 65.0538 71.0724 65.0538Z"
                  fill="#F09B24"
                />
                <path
                  d="M48.445 65.0538H48.0915C46.5296 65.0538 45.263 63.7875 45.263 62.2253C45.263 60.6635 46.5293 59.3969 48.0915 59.3969H48.445C50.0068 59.3969 51.2735 60.6631 51.2735 62.2253C51.2735 63.7875 50.0072 65.0538 48.445 65.0538Z"
                  fill="#F09B24"
                />
              </svg>
              <h2 className={classes.descTxt}>Search</h2>
            </Grid>

            <Grid
              item
              xs={3}
              className={classes.item}
              direction="column"
              justify="space-around"
            >
              <svg
                width="173"
                height="173"
                viewBox="0 0 173 173"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={classes.svgItem}
              >
                <path
                  d="M76.1151 58.6781C81.858 64.7799 91.2529 64.7786 96.9957 58.6781L99.2329 56.2997L96.1629 55.1105C95.4132 54.8201 94.9182 54.0981 94.9182 53.293V47.1053C92.5992 48.705 89.7918 49.6435 86.7692 49.6435C83.6042 49.6435 80.8232 48.775 78.549 47.3218V53.2217C78.549 54.0691 78.029 54.8293 77.2384 55.1355L73.973 56.4013L76.1151 58.6781Z"
                  fill="#EEBDA4"
                />
                <path
                  d="M86.434 58.6781C85.4111 57.5905 85.8137 55.8126 87.2061 55.2728L87.5585 55.1368C88.3478 54.8306 88.8692 54.0704 88.8692 53.223V49.4891C88.1828 49.5907 87.482 49.6448 86.7692 49.6448C83.6042 49.6448 80.8232 48.7763 78.549 47.3231V53.223C78.549 54.0704 78.029 54.8306 77.2384 55.1368L73.973 56.4026L76.1151 58.6781C80.3137 63.1393 86.4657 64.3338 91.7149 62.2708C89.7852 61.5132 87.9769 60.3174 86.434 58.6781Z"
                  fill="#E6B49E"
                />
                <path
                  d="M116.568 63.0126L98.9927 56.2073L96.7278 58.6134C91.1354 64.5555 81.9847 64.5555 76.3923 58.6134L74.2211 56.3063L56.9214 63.0126C56.9214 63.0126 48.9136 66.3057 48.9136 75.434V83.9816C48.9136 85.9971 50.5477 87.6311 52.5631 87.6311H120.927C122.942 87.6311 124.576 85.9971 124.576 83.9816V75.434C124.576 66.3057 116.568 63.0126 116.568 63.0126Z"
                  fill="#00C3FF"
                />
                <path
                  d="M59.932 83.9817V70.2127C59.932 65.2472 62.3012 62.0109 64.4619 60.0905L56.9214 63.014C56.9214 63.014 48.9136 66.3058 48.9136 75.4341V83.9817C48.9136 85.9972 50.5477 87.6312 52.5631 87.6312H63.5815C61.5661 87.6312 59.932 85.9972 59.932 83.9817Z"
                  fill="#00AAF0"
                />
                <path
                  d="M86.5607 0C75.7429 0 66.9749 8.768 66.9749 19.5858V27.4747C68.2829 26.2618 70.5835 25.6018 72.401 25.8447V24.8693C72.401 24.0932 73.0635 23.4808 73.8317 23.5388C81.4052 24.0826 88.6738 21.6765 94.4998 17.8699C95.0436 17.5149 95.7643 17.6033 96.2064 18.0785C101.188 23.4332 100.72 23.2247 100.72 23.9242V25.8407C102.712 25.5424 104.919 26.1575 106.146 27.3005V19.5858C106.146 8.76932 97.3772 0 86.5607 0Z"
                  fill="#75798A"
                />
                <path
                  d="M77.4178 19.5858C77.4178 10.5776 83.4999 2.99482 91.7822 0.710098C90.1191 0.250778 88.3689 0 86.5607 0C75.7429 0 66.9749 8.76932 66.9749 19.5858V27.4747C68.2829 26.2618 70.5835 25.6018 72.401 25.8447V24.8693C72.401 24.0932 73.0635 23.4808 73.8317 23.5388C75.0368 23.6246 76.2326 23.6286 77.4178 23.5732V19.5858Z"
                  fill="#7E8292"
                />
                <path
                  d="M100.938 25.1834V35.9128C100.938 36.0289 100.933 36.1438 100.93 36.2599C104.726 36.8341 107.7 34.0913 107.7 30.7217C107.7 27.3467 104.724 24.6159 100.938 25.1834Z"
                  fill="#EEBDA4"
                />
                <path
                  d="M72.1819 35.9128V25.1874C68.8769 24.7466 65.4201 27.2834 65.4201 30.7217C65.4201 34.0874 68.3872 36.8354 72.1911 36.2599C72.1885 36.1438 72.1819 36.0289 72.1819 35.9128Z"
                  fill="#EEBDA4"
                />
                <path
                  d="M105.551 26.3318C104.35 25.3946 102.739 24.9142 100.938 25.1835V35.9128C100.938 36.0289 100.933 36.1438 100.93 36.2599C102.736 36.5331 104.349 36.0501 105.551 35.1129V26.3318Z"
                  fill="#E6B49E"
                />
                <path
                  d="M72.1819 35.1142C70.8554 34.0794 70.0331 32.4889 70.0331 30.7229C70.0331 28.9992 70.9003 27.5024 72.1819 26.494V25.1887C68.8769 24.7465 65.4201 27.2833 65.4201 30.7229C65.4201 34.0873 68.3872 36.8353 72.1911 36.2599C72.1885 36.1437 72.1819 36.0289 72.1819 35.9127V35.1142Z"
                  fill="#E6B49E"
                />
                <path
                  d="M96.2064 17.4211C95.7643 16.946 95.0436 16.8575 94.4998 17.2126C88.6725 21.0191 80.9657 23.4253 73.3935 22.8815C72.6254 22.8234 71.9628 23.4358 71.9628 24.2119V35.9127C71.9628 43.4321 77.8561 50.3008 86.7692 50.3008C94.7031 50.3008 101.159 43.8465 101.159 35.9127V23.2669C101.157 22.5674 101.188 22.7746 96.2064 17.4211Z"
                  fill="#F5C5A9"
                />
                <path
                  d="M82.407 35.9128V22.2124C79.4663 22.838 76.42 23.098 73.3935 22.8816C72.6254 22.8235 71.9628 23.4359 71.9628 24.212V35.9128C71.9628 43.4322 77.8561 50.3009 86.7692 50.3009C88.5484 50.3009 90.2524 49.9749 91.8284 49.3809C86.0037 47.2665 82.407 41.7889 82.407 35.9128Z"
                  fill="#EEBDA4"
                />
                <path
                  d="M65.1535 87.6311V78.5714C65.1535 77.1301 63.9841 75.9607 62.5427 75.9607C61.1001 75.9607 59.932 77.1301 59.932 78.5714V87.6311H65.1535Z"
                  fill="#00AAF0"
                />
                <path
                  d="M113.558 87.6311V78.5714C113.558 77.1301 112.39 75.9607 110.947 75.9607C109.506 75.9607 108.336 77.1301 108.336 78.5714V87.6311H113.558Z"
                  fill="#00AAF0"
                />
                <path
                  d="M28.8633 136.599C24.1645 136.599 20.3196 140.444 20.3196 145.143C20.3196 149.841 24.1645 153.686 28.8633 153.686C33.562 153.686 37.4069 149.841 37.4069 145.143C37.4069 140.444 33.562 136.599 28.8633 136.599Z"
                  fill="#F5C5A9"
                />
                <path
                  d="M30.3574 145.143C30.3574 142.315 31.7498 139.8 33.8815 138.242C32.4705 137.21 30.7349 136.599 28.8633 136.599C24.1645 136.599 20.3196 140.444 20.3196 145.143C20.3196 149.843 24.1645 153.686 28.8633 153.686C30.7349 153.686 32.4705 153.075 33.8815 152.044C31.7498 150.485 30.3574 147.97 30.3574 145.143Z"
                  fill="#EEBDA4"
                />
                <path
                  d="M35.6818 153.686H22.0434C17.7247 153.686 14.1914 157.219 14.1914 161.538V170.937C14.1914 172.076 15.1153 173 16.2544 173H41.4708C42.6112 173 43.5338 172.076 43.5338 170.937V161.538C43.5351 157.219 40.0004 153.686 35.6818 153.686Z"
                  fill="#00C3FF"
                />
                <path
                  d="M24.2291 170.937V161.538C24.2291 157.219 27.7625 153.686 32.0811 153.686H22.0434C17.7247 153.686 14.1914 157.219 14.1914 161.538V170.937C14.1914 172.076 15.1153 173 16.2544 173H26.2908C25.1517 173 24.2291 172.076 24.2291 170.937Z"
                  fill="#00AAF0"
                />
                <path
                  d="M38.1962 165.343C38.1962 163.902 37.0281 162.733 35.5854 162.733C34.1441 162.733 32.9747 163.902 32.9747 165.343V173H38.1962V165.343Z"
                  fill="#00AAF0"
                />
                <path
                  d="M24.7518 173V165.343C24.7518 163.902 23.5824 162.733 22.1398 162.733C20.6984 162.733 19.529 163.902 19.529 165.343V173H24.7518Z"
                  fill="#039ADD"
                />
                <path
                  d="M136.897 125.562L88.0324 93.1325C88.0311 93.1298 88.0284 93.1285 88.0258 93.1272C87.1441 92.5359 86.0037 92.5385 85.1141 93.1272C85.1128 93.1285 85.1101 93.1298 85.1075 93.1325L36.2427 125.562C35.0416 126.359 34.7143 127.98 35.5115 129.181C36.3087 130.382 37.9295 130.71 39.1306 129.912L83.9592 100.161V127.737C83.9592 129.18 85.1286 130.348 86.5713 130.348C88.0126 130.348 89.182 129.18 89.182 127.737V100.161L134.011 129.912C135.212 130.711 136.832 130.382 137.63 129.181C138.427 127.98 138.1 126.359 136.897 125.562Z"
                  fill="#E4EAF8"
                />
                <path
                  d="M86.57 136.599C81.8712 136.599 78.0264 140.444 78.0264 145.143C78.0264 149.841 81.8712 153.686 86.57 153.686C91.2688 153.686 95.1136 149.841 95.1136 145.143C95.1136 140.444 91.2688 136.599 86.57 136.599Z"
                  fill="#F5C5A9"
                />
                <path
                  d="M88.0641 145.143C88.0641 142.315 89.4566 139.8 91.5895 138.242C90.1772 137.21 88.4416 136.599 86.57 136.599C81.8712 136.599 78.0264 140.444 78.0264 145.143C78.0264 149.843 81.8712 153.686 86.57 153.686C88.4416 153.686 90.1772 153.075 91.5895 152.044C89.4566 150.485 88.0641 147.97 88.0641 145.143Z"
                  fill="#EEBDA4"
                />
                <path
                  d="M93.3898 153.686H79.7514C75.4327 153.686 71.8994 157.219 71.8994 161.538V170.937C71.8994 172.076 72.822 173 73.9624 173H99.1788C100.318 173 101.242 172.076 101.242 170.937V161.538C101.242 157.219 97.7085 153.686 93.3898 153.686Z"
                  fill="#00C3FF"
                />
                <path
                  d="M81.9358 170.937V161.538C81.9358 157.219 85.4692 153.686 89.7878 153.686H79.7514C75.4327 153.686 71.8994 157.219 71.8994 161.538V170.937C71.8994 172.076 72.822 173 73.9624 173H83.9988C82.8597 173 81.9358 172.076 81.9358 170.937Z"
                  fill="#00AAF0"
                />
                <path
                  d="M95.9042 165.343C95.9042 163.902 94.7348 162.733 93.2935 162.733C91.8508 162.733 90.6827 163.902 90.6827 165.343V173H95.9042V165.343Z"
                  fill="#00AAF0"
                />
                <path
                  d="M82.4585 173V165.343C82.4585 163.902 81.2891 162.733 79.8478 162.733C78.4065 162.733 77.2371 163.902 77.2371 165.343V173H82.4585Z"
                  fill="#039ADD"
                />
                <path
                  d="M144.278 136.599C139.579 136.599 135.734 140.444 135.734 145.143C135.734 149.841 139.579 153.686 144.278 153.686C148.977 153.686 152.822 149.841 152.822 145.143C152.822 140.444 148.977 136.599 144.278 136.599Z"
                  fill="#F5C5A9"
                />
                <path
                  d="M145.771 145.143C145.771 142.315 147.165 139.8 149.296 138.242C147.885 137.21 146.15 136.599 144.278 136.599C139.579 136.599 135.734 140.444 135.734 145.143C135.734 149.843 139.579 153.686 144.278 153.686C146.15 153.686 147.885 153.075 149.296 152.044C147.163 150.485 145.771 147.97 145.771 145.143Z"
                  fill="#EEBDA4"
                />
                <path
                  d="M151.097 153.686H137.458C133.139 153.686 129.606 157.219 129.606 161.538V170.937C129.606 172.076 130.53 173 131.669 173H156.887C158.026 173 158.949 172.076 158.949 170.937V161.538C158.949 157.219 155.415 153.686 151.097 153.686Z"
                  fill="#00C3FF"
                />
                <path
                  d="M139.644 170.937V161.538C139.644 157.219 143.177 153.686 147.496 153.686H137.458C133.139 153.686 129.606 157.219 129.606 161.538V170.937C129.606 172.076 130.53 173 131.669 173H141.707C140.566 173 139.644 172.076 139.644 170.937Z"
                  fill="#00AAF0"
                />
                <path
                  d="M153.611 165.343C153.611 163.902 152.443 162.733 151 162.733C149.558 162.733 148.389 163.902 148.389 165.343V173H153.611V165.343Z"
                  fill="#00AAF0"
                />
                <path
                  d="M140.165 173V165.343C140.165 163.902 138.997 162.733 137.554 162.733C136.113 162.733 134.944 163.902 134.944 165.343V173H140.165Z"
                  fill="#039ADD"
                />
              </svg>
              <h2 className={classes.descTxt}>Share</h2>
            </Grid>

            <Grid
              item
              xs={3}
              className={classes.item}
              direction="column"
              justify="space-around"
            >
              <svg
                width="170"
                height="170"
                viewBox="0 0 170 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={classes.svgItem}
              >
                <path
                  d="M82.0934 60.3479L44.8242 97.6171H21.748C11.5706 97.6171 3.32031 105.867 3.32031 116.045V160.039H19.2578H56.4453V118.885L78.1761 86.612C82.624 80.0065 85 72.2237 85 64.2603V61.5522C85 60.0352 83.1659 59.2755 82.0934 60.3479Z"
                  fill="#FF5D5D"
                />
                <path
                  d="M148.252 97.6171H125.176L87.9066 60.3479C86.8341 59.2751 85 60.0348 85 61.5519V64.2599C85 72.2234 87.376 80.0058 91.8239 86.6116L113.555 118.885V160.039H150.742V155.702L152.651 160.039H166.68V116.045C166.68 105.867 158.429 97.6171 148.252 97.6171Z"
                  fill="#A0E557"
                />
                <path
                  d="M37.8516 65.7422C30.3434 65.7422 24.2569 71.8287 24.2569 79.3369V84.0228C24.2569 91.5307 30.3434 97.6172 37.8516 97.6172C45.3595 97.6172 51.4463 91.5307 51.4463 84.0225V79.3365C51.4463 71.8287 45.3598 65.7422 37.8516 65.7422Z"
                  fill="#FCC69D"
                />
                <path
                  d="M132.148 65.7422C139.657 65.7422 145.743 71.8287 145.743 79.3369V84.0228C145.743 91.5307 139.657 97.6172 132.148 97.6172C124.64 97.6172 118.554 91.5307 118.554 84.0225V79.3365C118.554 71.8287 124.64 65.7422 132.148 65.7422Z"
                  fill="#FCC69D"
                />
                <path
                  d="M84.9957 33.0348C86.8291 33.0348 88.316 31.5483 88.316 29.7145V9.96094C88.316 8.12713 86.8291 6.64062 84.9957 6.64062C83.1622 6.64062 81.6754 8.12713 81.6754 9.96094V29.7145C81.6754 31.5483 83.1622 33.0348 84.9957 33.0348Z"
                  fill="black"
                />
                <path
                  d="M61.4882 39.6874C62.1367 40.3352 62.986 40.6589 63.835 40.6589C64.6853 40.6589 65.5353 40.3342 66.1838 39.6854C67.4797 38.3882 67.4787 36.2861 66.1818 34.9898L58.2376 27.0526C56.9397 25.7564 54.8379 25.7574 53.5417 27.0546C52.2458 28.3519 52.2468 30.4539 53.5437 31.7502L61.4882 39.6874Z"
                  fill="black"
                />
                <path
                  d="M105.663 41.1822C106.514 41.1822 107.364 40.8575 108.012 40.2087L116.458 31.7562C117.754 30.4589 117.753 28.3568 116.456 27.0606C115.159 25.764 113.056 25.7653 111.76 27.0623L103.314 35.5148C102.018 36.812 102.019 38.9141 103.316 40.2104C103.965 40.8585 104.814 41.1822 105.663 41.1822Z"
                  fill="black"
                />
                <path
                  d="M148.252 94.2969H145.572C147.759 91.4464 149.063 87.8847 149.063 84.0229V79.3369C149.063 70.0098 141.475 62.4219 132.148 62.4219C122.822 62.4219 115.234 70.0098 115.234 79.3366V82.9793L90.2547 57.9999C88.8685 56.614 86.8298 56.1691 85.0003 56.8299C83.1715 56.1691 81.1322 56.614 79.7456 58.0003L54.7669 82.9793V79.3366C54.7662 70.0098 47.1783 62.4219 37.8516 62.4219C28.5248 62.4219 20.9369 70.0098 20.9369 79.3366V84.0226C20.9369 87.8847 22.2408 91.4461 24.4275 94.2966H21.748C9.75607 94.2969 0 104.053 0 116.045V160.039C0 161.873 1.48684 163.359 3.32031 163.359H17.3486C17.6807 163.359 18.0007 163.309 18.3032 163.219C18.6057 163.309 18.9258 163.359 19.2578 163.359H56.4453C58.2788 163.359 59.7656 161.873 59.7656 160.039V148.75C59.7656 146.916 58.2788 145.43 56.4453 145.43C54.6118 145.43 53.125 146.916 53.125 148.75V156.719H22.5781V118.885C22.5781 117.051 21.0913 115.565 19.2578 115.565C17.4243 115.565 15.9375 117.051 15.9375 118.885V156.719H6.64062V116.045C6.64062 107.715 13.4177 100.938 21.748 100.938H44.8242C45.738 100.938 46.5654 100.568 47.1657 99.971C47.168 99.9687 47.17 99.9674 47.1723 99.9654L81.6601 65.4773C81.434 72.3729 79.2891 79.0145 75.4222 84.7577L53.6914 117.03C53.3226 117.579 53.1253 118.224 53.1253 118.885V122.52C53.1253 124.353 54.6122 125.84 56.4456 125.84C58.2791 125.84 59.766 124.353 59.766 122.52V119.898L80.9306 88.4661C82.5476 86.0645 83.9036 83.5272 85.0003 80.8932C86.097 83.5272 87.4527 86.0645 89.07 88.4661L110.234 119.898V160.039C110.234 161.873 111.721 163.359 113.555 163.359H150.742C151.074 163.359 151.394 163.309 151.697 163.219C151.999 163.309 152.319 163.359 152.651 163.359H166.68C168.513 163.359 170 161.873 170 160.039V116.045C170 104.053 160.244 94.2969 148.252 94.2969ZM27.5775 84.0229V79.3369C27.5775 73.6715 32.1864 69.0626 37.8516 69.0626C43.5167 69.0626 48.1256 73.6715 48.1256 79.3366V84.0226C48.1256 89.688 43.517 94.2969 37.8516 94.2969C32.1861 94.2969 27.5775 89.688 27.5775 84.0229ZM121.874 79.3366C121.874 73.6715 126.483 69.0626 132.148 69.0626C137.814 69.0626 142.422 73.6715 142.422 79.3366V84.0226C142.422 89.688 137.814 94.2969 132.148 94.2969C126.483 94.2969 121.874 89.688 121.874 84.0229V79.3366ZM163.359 156.719H154.062V132.148C154.062 130.315 152.576 128.828 150.742 128.828C148.909 128.828 147.422 130.315 147.422 132.148V156.719H116.875V118.885C116.875 118.224 116.678 117.578 116.309 117.03L94.5781 84.758C90.7113 79.0149 88.5663 72.3732 88.3402 65.4776L122.828 99.9654C122.872 100.009 122.913 100.046 122.953 100.079C123.542 100.611 124.32 100.938 125.176 100.938H148.252C156.582 100.938 163.359 107.715 163.359 116.046V156.719Z"
                  fill="black"
                />
                <path
                  d="M150.742 115.563C149.869 115.563 149.012 115.919 148.395 116.536C147.777 117.154 147.422 118.011 147.422 118.884C147.422 119.757 147.777 120.614 148.395 121.231C149.012 121.849 149.869 122.204 150.742 122.204C151.615 122.204 152.472 121.849 153.089 121.231C153.707 120.614 154.062 119.757 154.062 118.884C154.062 118.011 153.707 117.157 153.089 116.536C152.472 115.919 151.615 115.563 150.742 115.563Z"
                  fill="black"
                />
                <path
                  d="M56.4453 133.145C55.5721 133.145 54.7154 133.5 54.0978 134.117C53.4803 134.735 53.125 135.592 53.125 136.465C53.125 137.338 53.4799 138.195 54.0978 138.812C54.7158 139.43 55.5721 139.785 56.4453 139.785C57.3186 139.785 58.1752 139.43 58.7924 138.812C59.41 138.195 59.7656 137.338 59.7656 136.465C59.7656 135.592 59.4104 134.735 58.7924 134.117C58.1752 133.5 57.3186 133.145 56.4453 133.145Z"
                  fill="black"
                />
              </svg>
              <h2 className={classes.descTxt}>Enjoy</h2>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
