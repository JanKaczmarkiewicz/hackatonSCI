import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Toolbar, CssBaseline, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AppBarComponent from './AppBar'
import Home from './Home'
import About from './About'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    height: '100vh'
  },
  container: {
    width: '100%',
    margin: 0
  }
}))

export default () => {
  const classes = useStyles()

  return (
    <Router>
      <CssBaseline />
      <AppBarComponent />
      <div className={classes.root}>
        <Toolbar />
        <Grid className={classes.container} container justify="center">
          <Grid item xs={12} md={8}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/events" render={() => <h1>Home</h1>} />
              <Route path="/login" render={() => <h1>Home</h1>} />
              <Route path="/register" render={() => <h1>Home</h1>} />
              <Route path="/event/:id" render={() => <h1>Home</h1>} />
              <Route path="/about" component={About} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </Grid>
        </Grid>
      </div>
    </Router>
  )
}