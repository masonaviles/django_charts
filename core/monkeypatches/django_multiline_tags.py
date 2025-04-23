import re
from django.template import base

# Patch to allow multi-line template tag parsing
base.tag_re = re.compile(base.tag_re.pattern, re.DOTALL)
