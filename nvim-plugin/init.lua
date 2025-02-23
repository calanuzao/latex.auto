local nvim_lsp = require('lspconfig')
local json = require('json')
local commands = {}

local function load_commands()
  local file = io.open('/Users/calodii/Desktop/latex.auto/shared/latex-commands.json', 'r')
  local content = file:read('*a')
  file:close()
  commands = json.decode(content).commands
end

local function setup_latex_completion()
  load_commands()
  -- Configure completion engine with commands
  -- ...existing code...
end

local function setup_snippets()
  -- Configure snippet expansion
  -- ...existing code...
end

local function setup_preview()
  -- Configure real-time LaTeX preview
  -- ...existing code...
end

return {
  setup = function()
    setup_latex_completion()
    setup_snippets()
    setup_preview()
  end
}
