const CFG = require( 'ast-flow-graph' ).load
const fs = require( 'fs' )
const src = fs.readFileSync( './test.js', 'utf8' )
const cfg = CFG( src, {
        parser:    {
            loc:          true,
            range:        true,
            comment:      true,
            tokens:       true,
            ecmaVersion:  9,
            sourceType:   'module',
            ecmaFeatures: {
                impliedStrict: true,
                experimentalObjectRestSpread: true
            }
        }
    } );
 
cfg.generate();

console.log( cfg.create_dot( myFunc ) );
