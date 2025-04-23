tree -F -I 'node_modules|venv|.git' | sed -E 's/(├── |└── )(.*\/)$/\1📁 \2/; s/(├── |└── )([^\/]*)$/\1📄 \2/' > structure.txt
