import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <div style={{ textAlign: 'right', padding: 12, position: 'absolute' }}>
          <Typography><a href='https://github.com/Flash619/SLDB-Homepage' target='_blank'><img src='/Octocat_Small.png' alt='Octocat' /></a></Typography>
        </div>
        <Grid container spacing={16}>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Typography component='h2' variant='h1' gutterBottom style={{ marginTop: 50 }}>
            SLDB
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item md={4} />
          <Grid item md={4}>
            <Typography component='p' variant='subtitle1' gutterBottom>
              SLDB is a simple lightweight database controller designed to speed development, while adding a layer of abstraction between various database types.
            </Typography>
          </Grid>
          <Grid item md={4} />
        </Grid>
        <Grid container spacing={16}>
          <Grid item md={3} />
          <Grid item md={6}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ minWidth: 500, marginTop: 25, display: 'inline-flex', justifyContent: 'space-between' }}>
                <Button target='_blank' href='https://sldb.readthedocs.io/en/latest/install.html' component={'a'} color='primary'>Getting Started</Button>
                <Button target='_blank' href='https://github.com/Flash619/SLDB/issues/new' component={'a'} color='primary'>Submit Issue</Button>
                <Button target='_blank' href='https://github.com/Flash619/SLDB' component={'a'} color='primary'>Fork on Github</Button>
              </div>
            </div>
            <Card style={{ marginTop: 25, textAlign: 'left' }}>
              <CardContent>
                <Typography component='h2' variant='h4' gutterBottom>
                  How Does It Work?
                </Typography>
                <Typography component='p' variant='body1' gutterBottom>
                  SLDB provides very few classes and is very focused on doing as much as you can, with as little as possible. By removing most of the boilerplate, SLDB is able to write complex queries, with a very small footprint.
                </Typography>
                <SyntaxHighlighter language='php' customStyle={{ lineHeight: 'normal', fontSize: '10pt', borderRadius: 5 }}>
                  {'$sldb = new SLDB(\n' +
                  '    array(\n' +
                  '    \'database_type\' => \'mysql\',\n' +
                  '    \'database_name\' => \'sldb_website\',\n' +
                  '    \'database_host\' => \'localhost\',\n' +
                  '    \'database_user\' => \'sldb\',\n' +
                  '    \'database_pass\' => \'secrete\',\n' +
                  '    )\n' +
                  ');\n' +
                  '\n' +
                  '$q = $sldb->initQuery()->select(\n' +
                  '    array(\n' +
                  '        \'card_title\',\n' +
                  '        \'card_content\'),\n' +
                  '        \'sldb_cards\'\n' +
                  '))->where(\n' +
                  '    $q->initCondition(\'sldb_cards\',\'page\',Condition::EQUAL_TO,\'home\')\n' +
                  ');\n' +
                  '\n' +
                  '$sldb->execute($q);'}
                </SyntaxHighlighter>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} />
        </Grid>
      </div>
    )
  }
}
export default App
