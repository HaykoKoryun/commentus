export default
function Commentus(initial, options)
{
  options = options || {};

  let _node =
    document
    .createComment(initial ? initial : "commentus");

  let _options =
  { position: 'first'
  };

  let validOptions =
  [ 'position'
  , 'target'
  ];

  validOptions.forEach((option) =>
  { if(typeof options[option] != 'undefined')
    { _options[option] = options[option]; 
    }
  });

  switch(_options.position)
  {
    case 'first':
    { document
        .firstChild
        .parentNode
        .insertBefore
        ( _node
        , document
            .firstChild
        );
    } break;

    case 'last':
    { document
      .lastChild
      .parentNode
      .appendChild
      ( _node
      , document
          .lastChild
      );
    } break;

    case 'target':
    {
      if(_options.target)
      {
        let target;

        if(typeof _options.target == 'string')
        { target = document.querySelector(_options.target);
        }
        else
        { target = _options.target;
        }

        if(!target)
        { console.log('Commentus: invalid target');
          return false;
        }

        try
        { target.replaceWith(_node);
        }
        catch(e)
        { console.log(`Commentus: ${e}`);
        }
      }
    } break;    
  }
      
  this.update = this.update.bind(this, _node);
}

Commentus.prototype.update = function(_node, message)
{
  _node.textContent = '\n' + message + '\n';
}