import bpy

r,g,b = 0.7,0.1,0.3


bpy.data.materials["Material"].node_tree.nodes["Principled BSDF"].inputs[0].default_value = (r, g, b, 1)